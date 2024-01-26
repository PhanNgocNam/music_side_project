import { IconType } from "../../types/IconType";

export default function PauseIcon({
  width,
  height,
  fill,
  classname,
}: IconType) {
  return (
    <div>
      <svg
        className={classname}
        width={`${width * 8}px`}
        height={`${height * 8}px`}
        fill={fill}
        viewBox="0 0 13 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.301483 2C0.301483 0.89543 0.196634 0 1.3012 0H3.3012C4.40577 0 4.30148 0.895431 4.30148 2V12C4.30148 13.1046 4.40577 14 3.3012 14H1.3012C0.196634 14 0.301204 13.1046 0.301204 12L0.301483 2Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clipRule="evenodd"
          d="M8.3012 2.5C8.3012 1.39543 8.19663 0 9.3012 0H11.3012C12.4058 0 12.3012 0.89543 12.3012 2V12C12.3012 13.1046 12.4058 14 11.3012 14H9.3012C8.19663 14 8.3012 13.1046 8.3012 12V2.5Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
