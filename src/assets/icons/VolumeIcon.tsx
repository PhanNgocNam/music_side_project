import { IconType } from "../../types/IconType";

export default function VolumeIcon({
  classname,
  width,
  height,
  fill,
}: IconType) {
  return (
    <div>
      <svg
        className={classname}
        width={`${width * 8}px`}
        height={`${height * 8}px`}
        fill={fill}
        viewBox="0 0 11 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.98865 0.483365V7.50338C6.98841 7.59409 6.96356 7.68303 6.91676 7.76074C6.86996 7.83844 6.80296 7.902 6.72289 7.94463C6.64448 7.98489 6.55685 8.00378 6.46881 7.99937C6.38078 7.99497 6.29547 7.96744 6.22146 7.91956L3.32821 5.99909H1.97436C1.70838 5.99909 1.4533 5.89343 1.26523 5.70536C1.07715 5.51728 0.971497 5.2622 0.971497 4.99623V2.99051C0.971497 2.72454 1.07715 2.46946 1.26523 2.28138C1.4533 2.09331 1.70838 1.98765 1.97436 1.98765H3.32821L6.21143 0.0671788C6.28766 0.0231692 6.37413 0 6.46215 0C6.55017 0 6.63664 0.0231692 6.71286 0.0671788C6.79118 0.106417 6.85785 0.165487 6.90624 0.238507C6.95462 0.311527 6.98304 0.395949 6.98865 0.483365Z"
          fill={fill ? fill : "#8E8E8E"}
        />
        <path
          d="M8.99437 2.48903H7.99151V5.49761H8.99437V2.48903Z"
          fill={fill ? fill : "#8E8E8E"}
        />
        <path
          d="M11.0001 0.483311H9.99723V7.50332H11.0001V0.483311Z"
          fill={fill ? fill : "#8E8E8E"}
        />
      </svg>
    </div>
  );
}
