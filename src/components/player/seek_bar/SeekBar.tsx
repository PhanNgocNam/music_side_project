import { forwardRef, useEffect, useState } from "react";
import { Slider } from "@mui/material";
import { useAppSelector } from "../../../hooks/useAppSelector";
import moment from "moment";

export default forwardRef<HTMLAudioElement>(function SeekBar({}, ref) {
  const { currentTime } = useAppSelector((state) => state.currentTime);
  const { duration } = useAppSelector((state) => state.duration);
  const [percentPlayed, setPercentPlayed] = useState(0);

  useEffect(() => {
    setPercentPlayed((currentTime / duration) * 100);
  }, [currentTime]);

  return (
    <Slider
      sx={{
        display: "block",
        width: "calc(100% - 2px)",
        position: "absolute",
        transform: "translateY(50%)",
        top: "0px",
        left: "1px",
        // padding: "0px",
        right: "1px",
        zIndex: "1000",
        "& .MuiSlider-track": {
          background: "#10B981",
        },

        "&::before": {
          display: "none",
        },

        "& .MuiSlider-thumb": {
          height: 4,
          width: 4,
          backgroundColor: "#10B981",
        },

        "& .MuiSlider-rail": {
          background: "#D9D9D9",
        },
      }}
      size="small"
      valueLabelDisplay="auto"
      valueLabelFormat={() => (
        <h1 className="text-[1rem]">
          {currentTime ? moment.utc(currentTime * 1000).format("mm:ss") : ""}
        </h1>
      )}
      defaultValue={0}
      value={percentPlayed}
      onChange={(event, newValue) => {
        if (ref && "current" in ref && ref.current) {
          setPercentPlayed(newValue as number);
          ref.current.currentTime = (duration * Number(newValue)) / 100;
        }
        event.stopPropagation();
      }}
    />
  );
});
