import { IconType } from "../../types/IconType";

export default function ShuffleIcon({
  classname,
  height,
  width,
  fill,
}: IconType) {
  return (
    <div>
      <svg
        className={classname}
        width={`${width * 8}px`}
        height={`${height * 8}px`}
        fill={fill}
        viewBox="0 0 12 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.30121 2.2H2.45621C2.9649 2.20062 3.4661 2.32251 3.91827 2.55555C4.37044 2.78859 4.76053 3.12607 5.05621 3.54L7.14621 6.46C7.44188 6.87393 7.83198 7.21141 8.28415 7.44445C8.73631 7.67749 9.23752 7.79938 9.74621 7.8H11.3012M11.3012 7.8L10.1012 6.6M11.3012 7.8L10.1012 9M10.1012 1L11.3012 2.2M11.3012 2.2L10.1012 3.4M11.3012 2.2H9.74617C9.23748 2.20062 8.73627 2.32251 8.28411 2.55555C7.83194 2.78859 7.44184 3.12607 7.14617 3.54L7.08617 3.625M1.30121 7.8H2.45621C2.9649 7.79938 3.4661 7.67749 3.91827 7.44445C4.37044 7.21141 4.76053 6.87393 5.05621 6.46L5.11621 6.375"
          stroke={fill ? fill : "#BBBBBB"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
