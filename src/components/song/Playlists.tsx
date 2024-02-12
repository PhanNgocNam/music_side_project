import Box from "@mui/material/Box";
import HeartIcon from "../../assets/icons/HeartIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import { ArtistsTypes } from "../../types/ArtistsType";
import { Link, useNavigate } from "react-router-dom";

import { CarouselItemTypes } from "../../types/CarouselItemType";

export default function Playlists({
  encodeId,
  title,

  thumbnailM,
  artists,
}: CarouselItemTypes) {
  const navigate = useNavigate();

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
          className="min-w-full w-full object-contain pointer-events-none"
          src={thumbnailM}
          alt=""
        />
      </Box>

      {/* Begin title box */}
      <Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          color={"white"}
          fontSize={"1.4rem"}
          paddingTop=".6em"
          paddingBottom=".6em"
        >
          <p className="text-[1.4rem] one_line">{title}</p>
          <HeartIcon height={2} width={2} />
        </Box>
        <p className="text-white/80 text-[1.1rem] min-h-[30px] two_line">
          {artists?.map((artist: ArtistsTypes) => (
            <Link
              to={`/p2n/artists?id=${artist.alias}`}
              className="group hover:underline hover:text-blue-300"
            >
              {artist.name} <span className="group-last:hidden">{", "}</span>
            </Link>
          ))}
        </p>
      </Box>

      {/* End title box */}

      {/* Begin play box */}
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
        color={"white"}
        fontSize={"8px"}
        width={"100%"}
      >
        <p></p>
        <button
          onClick={() => {
            navigate(`/p2n/list?id=${encodeId}`);
          }}
          className="h-[30px] w-[30px] bg-white rounded-full relative hover:scale-[1.2]"
        >
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
