import { TbLoader2 } from "react-icons/tb";
import PauseIcon from "../../assets/icons/PauseIcon";
import { useAppSelector } from "../../hooks/useAppSelector";
import { triggerPauseOrPlay } from "../../features/playing/isPlayingSlice";
import PlayIcon from "../../assets/icons/PlayIcon";
import { useDispatch } from "react-redux";

type PlayButtonTypes = {
  className?: string;
};

export default function PlayButton({ className }: PlayButtonTypes) {
  const { ready } = useAppSelector((state) => state.canPlay);
  const { isPlaying } = useAppSelector((state) => state.playing);
  const dispatch = useDispatch();
  const playingNode = ready ? (
    <PauseIcon width={2.2} height={2.2} />
  ) : (
    <TbLoader2 size={22} className="animate-spin text-white" />
  );
  return (
    <button
      className={`hover:opacity-60 w-[36px] h-[36px] rounded-full border border-white/20 flex justify-center items-center relative ${className}`}
      onClick={(event) => {
        event.stopPropagation();
        dispatch(triggerPauseOrPlay());
      }}
    >
      {isPlaying ? (
        playingNode
      ) : (
        <PlayIcon
          width={2.2}
          height={2.2}
          fill="white"
          classname="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[50%]"
        />
      )}
    </button>
  );
}
