import bookingModel from "@/models/booking-model";
import cityModel from "@/models/city-model";
import hotelModel from "@/models/hotel-model";
import ratingModel from "@/models/rating-model";
import reviewModel from "@/models/review-model";
import connectMongoDB from "@/service";
import { isDateInBetween, replaceMongoIdInArray } from "@/utils";

async function getAllHotels(destination, checkin, checkout) {
  await connectMongoDB();
  const regex = new RegExp(destination, "i");
  const hotels = await hotelModel
    .find({ city: { $regex: regex } })
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();

  let allHotels = hotels;
  let response;

  if (checkin && checkout) {
    const res = await Promise.all(
      allHotels.map(async (hotel) => {
        const found = await findBooking(hotel._id, checkin, checkout);
        if (!found) {
          hotel["isBooked"] = false;
        } else {
          hotel["isBooked"] = true;
        }
        return hotel;
      })
    );

    response = res;
  }

  if (response) {
    return replaceMongoIdInArray(response);
  } else {
    return replaceMongoIdInArray(allHotels);
  }
}

async function findBooking(hotelId, checkin, checkout) {
  await connectMongoDB();
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();

  const found = matches.find((match) => {
    return (
      isDateInBetween(checkin, match.checkin, match.checkout) ||
      isDateInBetween(checkout, match.checkin, match.checkout)
    );
  });

  return found;
}

async function getSingleHotel(id) {
  await connectMongoDB();
  const hotel = await hotelModel.findById(id);
  return hotel;
}

async function getRatingsForHotel(hotelId) {
  await connectMongoDB();
  const ratings = await ratingModel.find({ hotelId: hotelId }).lean();
  return ratings;
}

async function getReviewsForHotel(hotelId) {
  await connectMongoDB();
  const reviews = await reviewModel.find({ hotelId: hotelId }).lean();
  return reviews;
}

async function getCitiesSuggestions(query) {
  await connectMongoDB();
  const regex = new RegExp(query, "i");
  let results;
  if (regex) {
    results = await cityModel.find({ name: { $regex: regex } }).lean();
  } else {
    results = await cityModel.find().lean();
  }

  return results;
}

export {
  getAllHotels,
  getRatingsForHotel,
  getReviewsForHotel,
  getSingleHotel,
  getCitiesSuggestions,
  findBooking,
};
