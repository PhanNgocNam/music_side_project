import { useSwiper } from "swiper/react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

type CarouselHeaderTypes = {
  title?: string;
  disableLeftArrow: boolean;
  disableRightArrow: boolean;
  className?: string;
  slot?: "container-start" | "container-end" | "wrapper-start" | "wrapper-end";
};

export default function CustomeNavigation({
  className,
  title,
  disableLeftArrow,
  disableRightArrow,
  slot,
}: CarouselHeaderTypes) {
  const swiper = useSwiper();
  return (
    <div
      slot={slot}
      className={`flex w-[100%] min-w-[100px] justify-between items-start leading-none pt-6 ${className}`}
    >
      <p className="text-[#FFFFFF] text-[1.6rem] leading-6 flex items-center gap-3">
        {/* <MdOutlineQueueMusic className="border border-white/40" /> */}
        {title}
      </p>

      <div>
        <button
          disabled={disableLeftArrow}
          className="text-white hover:opacity-50 disabled:opacity-10"
          onClick={() => swiper.slideNext()}
        >
          <IoIosArrowDropleft size={24} />
        </button>
        <button
          disabled={disableRightArrow}
          className="text-white hover:opacity-50 disabled:opacity-10"
          onClick={() => swiper.slidePrev()}
        >
          <IoIosArrowDropright size={24} />
        </button>
      </div>
    </div>
  );
}
