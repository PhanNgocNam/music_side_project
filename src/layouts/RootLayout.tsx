import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function RootLayout() {
  return (
    <div className="flex justify-between items-center h-[100dvh] bg-[#1B2339] p-2 overflow-hidden ">
      <Sidebar />
      <Outlet />
    </div>
  );
}
