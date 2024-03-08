import { TbLoader2 } from "react-icons/tb";

type loadingType = {
  className?: string;
};

export default function Loading({ className }: loadingType) {
  return (
    <div
      className={`flex items-center gap-2 text-white text-[1.4rem] ${className}`}
    >
      <TbLoader2 className="animate-spin" />
      <span className="animate-bounce">Loading...</span>
    </div>
  );
}
