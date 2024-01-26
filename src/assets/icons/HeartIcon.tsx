import { useState } from "react";
import { IconType } from "../../types/IconType";

export default function HeartIcon({ width, height, fill }: IconType) {
  const [liked, setLiked] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center">
      <svg
        width={`${width * 8}px`}
        height={`${height * 8}px`}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          d="M10.001 4.55655C10.0758 4.46723 10.157 4.37779 10.2451 4.2897C11.0698 3.46508 12.4092 2.85119 14.3698 3.34134C16.3259 3.83037 17.8102 5.30433 18.3061 7.16427C18.8082 9.04758 18.2746 11.2212 16.4234 13.0724C14.477 15.0187 12.8156 16.681 11.77 17.7272C10.7938 18.7041 9.21268 18.7045 8.23601 17.728L3.57971 13.0724C1.72777 11.2208 1.19408 9.04715 1.69643 7.16384C2.19252 5.304 3.67705 3.83037 5.6326 3.34135C7.59286 2.85116 8.93225 3.46513 9.75683 4.2897C9.84492 4.37779 9.92616 4.46723 10.001 4.55655Z"
          fill={liked ? fill : "#FF0000"}
        />{" "}
      </svg>
    </div>
  );
}
