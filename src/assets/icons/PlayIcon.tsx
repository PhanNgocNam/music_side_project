import { IconType } from "../../types/IconType";

export default function PlayIcon({ width, height, fill, classname }: IconType) {
  return (
    <div className="flex justify-center items-center">
      <svg
        className={classname}
        width={`${width * 8}px`}
        height={`${height * 8}px`}
        viewBox="0 0 13 16"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 16L12.9524 8L0 0V16Z" fill={fill ? fill : "#1B2339"} />
      </svg>
    </div>
  );
}
