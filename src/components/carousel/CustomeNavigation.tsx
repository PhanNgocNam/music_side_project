import { useSwiper } from "swiper/react";

export default function CustomeNavigation() {
  const swiper = useSwiper();
  return (
    <div className="flex w-full min-w-[100px] justify-between items-center bg-slate-50 absolute top-0 right-0">
      <button className="" onClick={() => swiper.slidePrev()}>
        prev
      </button>
      <button className="" onClick={() => swiper.slideNext()}>
        next
      </button>
    </div>
  );
}
