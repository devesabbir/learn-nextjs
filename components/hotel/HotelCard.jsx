import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

function HotelCard({ hotel, checkin, checkout }) {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={hotel?.thumbNailUrl}
        className="max-h-[162px] max-w-[240px]"
        alt={hotel?.name}
        width={500}
        height={500}
      />
      <HotelSummaryInfo
        checkin={checkin}
        checkout={checkout}
        hotel={hotel}
        fromListPage={true}
      />
    </div>
  );
}

export default HotelCard;
