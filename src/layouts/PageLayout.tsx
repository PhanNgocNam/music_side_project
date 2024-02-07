import { Outlet } from "react-router-dom";
import Player from "../components/player/Player";
import Search from "../components/search_box/Search";

export default function PageLayout() {
  return (
    <div className="max-w-[80%] w-[80%] h-full ml-2 relative rounded-md overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-cyan-500 to-blue-500  w-[50%] h-[20%] -rotate-12 rounded-[99999px] -z-1 blur-[80px] opacity-60" />

      <div className="w-full h-full overflow-y-auto">
        {/* <Search /> */}
        <Outlet />
      </div>
      <Player />
    </div>
  );
}
