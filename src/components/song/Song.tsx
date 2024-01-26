import Box from "@mui/material/Box";
import HeartIcon from "../../assets/icons/HeartIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import { PlaylistTypes } from "../../types/CarouselItemType";

export default function Song({
  id,
  title,
  description,
  thumbnail,
  thumbnailM,
  artists,
}: PlaylistTypes) {
  return (
    <Box
      p={2}
      bgcolor="#424242"
      borderRadius={1}
      height="fit-content"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems={"center"}
      flexDirection="column"
      zIndex={100}
    >
      <Box overflow="hidden" borderRadius={1} width={"fit-content"}>
        <img
          className="min-w-[160px] h-[160px] w-[160px] object-contain pointer-events-none"
          src={thumbnailM}
          alt=""
        />
      </Box>

      {/* Begin title box */}
      <Box width={"160px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          color={"white"}
          fontSize={"14px"}
          paddingTop=".6em"
          paddingBottom=".6em"
        >
          <p>{title}</p>
          <HeartIcon height={2} width={2} />
        </Box>
        <p className="text-white text-[10px]">
          {artists.map((artist) => artist.name).join(", ")}{" "}
        </p>
      </Box>

      {/* End title box */}

      {/* Begin play box */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        color={"white"}
        fontSize={"8px"}
        width={"160px"}
      >
        <p></p>
        <button className="h-[30px] w-[30px] bg-white rounded-full relative">
          <PlayIcon
            width={1.8}
            height={1.8}
            classname="absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-[45%]"
          />
        </button>
      </Box>
      {/* End play box */}
    </Box>
  );
}
