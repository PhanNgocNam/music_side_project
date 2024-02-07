import { useRef } from "react";
import Audio from "./audio/Audio";
import MainPlayer from "./main_player/MainPlayer";
import SeekBar from "./seek_bar/SeekBar";
import Right from "./right/Right";
import Left from "./left/Left";
import { motion } from "framer-motion";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function Player() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const { isPlaying } = useAppSelector((state) => state.playing);
  const { currentSongId } = useAppSelector((state) => state.currentSongId);
  return (
    <>
      {currentSongId ? (
        <motion.div
          initial={{
            y: "100%",
          }}
          animate={{
            y: "0%",
          }}
          transition={{
            duration: 1,
          }}
          className="h-[64px] w-full flex items-center justify-center absolute left-0 right-0 bottom-0 bg-[#1E1E1E] p-2 z-[110]"
        >
          <Audio ref={ref} />
          <SeekBar ref={ref} />
          <div className="w-full flex justify-between">
            <Left />
            <MainPlayer ref={ref} />
            <Right ref={ref} />
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}
