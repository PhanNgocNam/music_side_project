import { useRef } from "react";
import Audio from "./audio/Audio";
import MainPlayer from "./main_player/MainPlayer";
import SeekBar from "./seek_bar/SeekBar";
import Right from "./right/Right";

export default function Player() {
  const ref = useRef<HTMLAudioElement | null>(null);
  return (
    <div className="h-[64px] w-full flex items-center justify-center absolute left-0 right-0 bottom-0 bg-[#1E1E1E] p-2    invisible">
      <Audio ref={ref} />
      <SeekBar ref={ref} />
      <div className="w-full flex justify-between ">
        <div className="min-w-60 w-[240px]">left</div>
        <MainPlayer ref={ref} />
        <Right />
      </div>
    </div>
  );
}
