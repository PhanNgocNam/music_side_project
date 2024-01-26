import { IconType } from "../../types/IconType";

export default function LoopIcon({ classname, width, height, fill }: IconType) {
  return (
    <div>
      <svg
        className={classname}
        width={`${width * 8}px`}
        height={`${height * 8}px`}
        fill={fill}
        viewBox="0 0 10 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.52343 1.11111L9.30121 2.88889M9.30121 2.88889L7.52343 4.66667M9.30121 2.88889H3.07899C2.60749 2.88889 2.15531 3.07619 1.82191 3.40959C1.48851 3.74299 1.30121 4.19517 1.30121 4.66667V5.55556M3.07899 10.8889L1.30121 9.11111M1.30121 9.11111L3.07899 7.33334M1.30121 9.11111H7.52343C7.99493 9.11111 8.44711 8.92381 8.78051 8.59042C9.11391 8.25702 9.30121 7.80483 9.30121 7.33334V6.44445"
          stroke={fill ? fill : "#AFAFAF"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
