import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

function HotelCard() {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src="/assets/images/image-1.png"
        className="max-h-[162px] max-w-[240px]"
        alt=""
        width={500}
        height={500}
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
}

export default HotelCard;
