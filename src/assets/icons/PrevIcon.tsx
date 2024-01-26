import { IconType } from "../../types/IconType";

export default function PrevIcon({ classname, width, height, fill }: IconType) {
  return (
    <div>
      <svg
        className={classname}
        width={`${width * 8}px`}
        height={`${height * 8}px`}
        fill={fill}
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.68216 9L3.20597 5L9.68216 1V9ZM0.920255 1.7619V8.2381V1.7619Z"
          fill="#BBBBBB"
        />
        <path
          d="M0.920254 1.7619V8.2381M9.68216 9L3.20597 5L9.68216 1V9Z"
          stroke={fill ? fill : "#BBBBBB"}
          strokeWidth="0.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
