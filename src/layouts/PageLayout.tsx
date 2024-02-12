import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { useEffect } from "react";

export default function PageLayout() {
  const { currentSongId } = useAppSelector((state) => state.currentSongId);
  const { currentSongName } = useAppSelector((state) => state.currentSongName);

  useEffect(() => {
    if (currentSongId !== "") {
      document.title = currentSongName;
    }
  }, [currentSongId]);
  return (
    <div className="w-[80%] h-full ml-2 rounded-md overflow-hidden sm:w-full sm:ml-0 sm:mt-[120px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-cyan-500 to-blue-500  w-[50%] h-[20%] -rotate-12 rounded-[99999px] -z-1 blur-[80px] opacity-60 " />

      <div className="w-full h-full overflow-y-auto relative">
        <Outlet />
      </div>
    </div>
  );
}
