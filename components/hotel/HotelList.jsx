import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";

const HotelList = async ({ destination, checkin, checkout }) => {
  const hotels = await getAllHotels(destination, checkin, checkout);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {hotels?.map((hotel) => (
          <HotelCard
            checkin={checkin}
            checkout={checkout}
            key={hotel?.id}
            hotel={hotel}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
