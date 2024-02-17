import Slider from "@mui/material/Slider";
import MutedIcon from "../../../assets/icons/MutedIcon";
import VolumeIcon from "../../../assets/icons/VolumeIcon";
import { GiMicrophone } from "react-icons/gi";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useAppSelector";

export default React.forwardRef<HTMLAudioElement>(function Right({}, ref) {
  const navigate = useNavigate();
  const { current_playlist_id } = useAppSelector(
    (state) => state.currentPlaylistId
  );
  return (
    <div
      onClick={() => navigate(`/list?id=${current_playlist_id}`)}
      className="min-w-60 w-[240px] flex flex-1 gap-1 items-center justify-end sm:hidden"
    >
      <button className="text-[#BBBBBB]  border w-[32px] h-[32px] flex justify-center items-center border-white/20 rounded-sm hover:bg-white/20">
        <GiMicrophone size={16} />
      </button>
      <MutedIcon width={1.5} height={1.5} classname="ml-4" />
      <Slider
        size="small"
        valueLabelDisplay="auto"
        sx={{
          maxWidth: "40%",
          "& .MuiSlider-track": {
            background: "#D9D9D9",
          },
          "& .MuiSlider-thumb": {
            width: 4,
            height: 4,
            background: "#D9D9D9",
          },
          "& .MuiSlider-rail": {
            background: "#747474",
          },
          "&::before": {
            display: "none",
          },
        }}
        defaultValue={50}
        onChange={(e, value) => {
          e.stopPropagation();
          if (ref && "current" in ref && ref.current) {
            ref.current.volume = Number(value) * 0.01;
          }
        }}
      />
      <VolumeIcon width={1.5} height={1.5} />
    </div>
  );
});
