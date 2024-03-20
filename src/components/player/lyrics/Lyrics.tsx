import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { get } from "../../../utils/get";
import { urls } from "../../../constant/requestURL";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { ResponseDataTypes } from "../../../types/ResponseDataTypes";
import { LyricType } from "../../../types/LyricType";
import { processLyricRawData } from "../../../utils/processLyricRawData";
import clsx from "clsx";
import VolumeIcon from "../../../assets/icons/VolumeIcon";

export default function Lyrics({ isToggle }: { isToggle: boolean }) {
  const { currentSongId } = useAppSelector((state) => state.currentSongId);
  const { currentTime } = useAppSelector((state) => state.currentTime);
  const [lyric, setLyric] = useState<ResponseDataTypes<LyricType>>();
  const lyricRef = useRef<HTMLParagraphElement | null>(null);
  const lyrics = processLyricRawData(lyric?.data.data.sentences);

  useEffect(() => {
    (async () => {
      const { data } = await get(`${urls.lyric}?id=${currentSongId}`);
      setLyric(data);
    })();
  }, [currentSongId]);

  return (
    <AnimatePresence>
      {isToggle ? (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          className="fixed top-2 left-2 right-2 -bottom-[64px] bg-slate-700 z-[110] flex items-center flex-col overflow-y-auto pb-[200px] h-[90%]"
        >
          {lyrics?.map((sentence) => {
            if (
              currentTime * 1000 > sentence.startTime &&
              currentTime * 1000 <= sentence.endTime
            ) {
              lyricRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
            return (
              <p
                ref={
                  currentTime * 1000 > sentence.startTime &&
                  currentTime * 1000 <= sentence.endTime
                    ? lyricRef
                    : null
                }
                className={`text-2xl py-2 text-white px-2 text-center rounded-md transition-all
                  ${clsx({
                    ["text-yellow-400 scale-[1.2] text-3xl font-bold text-shadow"]:
                      currentTime * 1000 > sentence.startTime &&
                      currentTime * 1000 <= sentence.endTime,
                  })}
                `}
              >
                {sentence.lyric}{" "}
                <span>
                  <VolumeIcon
                    width={1}
                    height={1}
                    fill="white"
                    classname="inline"
                  />
                </span>
              </p>
            );
          })}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
