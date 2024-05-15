import hotelModel from "@/models/hotel-model";
import ratingModel from "@/models/rating-model";
import reviewModel from "@/models/review-model";
import connectMongoDB from "@/service";
import { replaceMongoIdInArray } from "@/utils";

async function getAllHotels() {
  await connectMongoDB();
  const hotels = await hotelModel
    .find()
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();

  return replaceMongoIdInArray(hotels);
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

export { getAllHotels, getRatingsForHotel, getReviewsForHotel, getSingleHotel };
