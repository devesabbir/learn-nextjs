import { getRatingsForHotel } from "@/database/queries";
import HotelReviews from "./HotelReviews";

async function HotelRatings({ hotelId }) {
  const ratings = await getRatingsForHotel(hotelId);

  const getRatingDescription = (avgRating) => {
    if (avgRating === 0) {
      return "No Ratings Available";
    } else if (avgRating > 0 && avgRating <= 2) {
      return "Poor";
    } else if (avgRating > 2 && avgRating <= 3) {
      return "Average";
    } else if (avgRating > 3 && avgRating <= 4) {
      return "Good";
    } else if (avgRating > 4) {
      return "Very Good";
    }
  };

  let avgRatings;

  if (ratings?.length === 1) {
    avgRatings = ratings[0].rating;
  } else if (ratings?.length > 1) {
    avgRatings = ratings.reduce((acc, current) => {
      return (acc.rating + current.rating) / ratings?.length;
    }, 0);
  } else {
    avgRatings = 0;
  }

  return (
    <div className="flex gap-2 items-center my-4">
      <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
        {avgRatings}
      </div>
      <span className="font-medium">{getRatingDescription(avgRatings)}</span>
      <HotelReviews hotelId={hotelId} />
    </div>
  );
}

export default HotelRatings;
