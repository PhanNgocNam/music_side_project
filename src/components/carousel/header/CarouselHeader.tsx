import { useSwiper } from "swiper/react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { MdOutlineQueueMusic } from "react-icons/md";

export default function CustomeNavigation({
  title,
  disableLeftArrow,
  disableRightArrow,
}: {
  title?: string;
  disableLeftArrow: boolean;
  disableRightArrow: boolean;
}) {
  const swiper = useSwiper();
  return (
    <div className="flex w-full min-w-[100px] h-[50px] justify-between items-center  absolute top-0 right-0">
      <p className="text-[#FFFFFF] text-[1.8rem] leading-6 flex items-center gap-3">
        <MdOutlineQueueMusic className="border border-white/40" />
        {title}
      </p>

      <div>
        <button
          disabled={disableLeftArrow}
          className="text-white hover:opacity-50 disabled:opacity-10"
          onClick={() => swiper.slidePrev()}
        >
          <IoIosArrowDropleft size={24} />
        </button>
        <button
          disabled={disableRightArrow}
          className="text-white hover:opacity-50 disabled:opacity-10"
          onClick={() => swiper.slideNext()}
        >
          <IoIosArrowDropright size={24} />
        </button>
      </div>
    </div>
  );
}
