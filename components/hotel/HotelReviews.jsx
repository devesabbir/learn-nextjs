import { getReviewsForHotel } from "@/database/queries";
import Link from "next/link";

async function HotelReviews({ hotelId }) {
  const reviews = await getReviewsForHotel(hotelId);

  return (
    <>
      {reviews?.length === 0 ? (
        <Link href={`/hotels/${hotelId}/reviews`}>
          Be the first one to review
        </Link>
      ) : (
        <span>{reviews.length} Reviews</span>
      )}
    </>
  );
}

export default HotelReviews;
