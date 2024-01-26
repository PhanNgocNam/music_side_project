import { IconType } from "../../types/IconType";

export default function NextIcon({ width, height, fill, classname }: IconType) {
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
          d="M0.920258 9L7.39645 5L0.920258 1V9ZM9.68216 1.7619V8.2381V1.7619Z"
          fill={fill ? fill : "#BBBBBB"}
        />
        <path
          d="M9.68216 1.7619V8.2381M0.920258 9L7.39645 5L0.920258 1V9Z"
          stroke={fill ? fill : "#BBBBBB"}
          strokeWidth="0.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
