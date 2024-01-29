import { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useSwiper } from "swiper/react";

type SlidesNavigateTypes = {
  className?: string;
  slot: "container-start" | "container-end";
  title?: string;
};

export default function SlidesNavigates({ slot, title }: SlidesNavigateTypes) {
  const swiper = useSwiper();
  const [activeSlide, setActiveSlide] = useState(2);

  useEffect(() => {
    const handleReachBeginning = () => setActiveSlide(2);
    swiper.on("reachBeginning", handleReachBeginning);

    return () => {
      removeEventListener("reachBeginning", handleReachBeginning);
    };
  }, [swiper]);

  useEffect(() => {
    const handleReachEnd = () => setActiveSlide(1);
    swiper.on("reachEnd", handleReachEnd);
    return () => {
      removeEventListener("reachEnd", handleReachEnd);
    };
  }, [swiper]);

  return (
    <span
      slot={slot}
      className="flex text-white/80 items-center justify-between px-2 mr-4 py-2 border-b border-white/20"
    >
      <p className="text-[1.2rem]">{title}</p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            swiper.slidePrev();
          }}
          className="text-white/80"
        >
          <span
            style={{
              opacity: `${activeSlide === 2 ? 0.9 : 0.2}`,
            }}
            className="w-[2em] h-[2em] bg-white/80 block rounded-full"
          />
        </button>
        <button
          onClick={() => {
            swiper.slideNext();
          }}
          className="text-white/80"
        >
          <span
            style={{
              opacity: `${activeSlide === 1 ? 0.9 : 0.2}`,
            }}
            className="w-[2em] h-[2em] bg-white/80 block rounded-full"
          />
        </button>
      </div>
    </span>
  );
}
