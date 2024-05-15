import Link from "next/link";
import HotelRatings from "./HotelRatings";

function HotelSummaryInfo({ hotel, fromListPage }) {
  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2
          className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}
        >
          {hotel?.name}
        </h2>
        <p>📍 {hotel?.city}</p>
        <HotelRatings hotelId={hotel?.id} />
        <div>
          <span className="bg-yellow-400 rounded-sm p-1">
            {hotel?.propertyCategory} Star Property
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">
          ${(hotel?.highRate + hotel?.lowRate) / 2}/night
        </h2>
        <p className=" text-right">Per Night for 4 Rooms</p>
        {fromListPage ? (
          <Link href={`/hotels/${hotel?.id}`} className="btn-primary ">
            Details
          </Link>
        ) : (
          <button className="btn-primary ">Book</button>
        )}
      </div>
    </>
  );
}

export default HotelSummaryInfo;
