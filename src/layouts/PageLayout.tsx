import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { useEffect } from "react";
import Modal from "../components/modal/Modal";

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

      <Modal title="Login">
        <div className="flex flex-col gap-2">
          <input
            placeholder="username"
            className="shadow-md outline-none py-2"
          />
          <input
            placeholder="password"
            type="password"
            className="shadow-md outline-none py-2"
          />
          <button className="bg-blue-500 py-2 rounded-md font-bold">
            Login
          </button>
        </div>
      </Modal>

      <div className="w-full h-full overflow-y-auto relative">
        <Outlet />
      </div>
    </div>
  );
}
