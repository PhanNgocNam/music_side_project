import { NavLink } from "react-router-dom";
import { navLinks } from "../../constant/navLinks";
import Search from "../search_box/Search";
import Logo from "../../assets/svgs/logo.svg";
import { Avatar } from "@mui/material";

export default function Sidebar() {
  return (
    <div className="w-[20%] z-[102] flex flex-col items-start h-full rounded-md bg-gradient-to-tl from-[#4285F4]/80 to-[#4285F4]/40 px-4 lg:w-[30%] sm:w-full sm:absolute sm:top-0 sm:left-0 sm:right-0 sm:flex-row sm:h-[64px] sm:items-center">
      <div className="w-full my-4 flex justify-start items-center sm:w-fit">
        <Avatar src={Logo} sx={{ width: 24, height: 24 }} />
        <span className="flex-1 text-[#D7EDFF] text-[1.8rem] ml-2 tracking-tighter font-extrabold">
          P2N <span className="sm:hidden">Music</span>
        </span>
      </div>
      <div className="w-full sm:flex sm:items-center">
        <Search />
        <ul className="w-full text-[1.4rem] font-bold text-white/80 sm:flex sm:justify-between sm:gap-1 sm:h-[64px] sm:items-center sm:w-1/3">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink
                className="hover:bg-white/20 rounded-md w-full flex justify-start gap-4 items-center p-2 my-1"
                style={({ isActive }) => ({
                  background: isActive ? "rgba(255, 255, 255, .2)" : "",
                })}
                to={navLink.to}
              >
                <navLink.icon size={18} />
                <span className="sm:hidden">{navLink.link}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:hidden">username</div>
    </div>
  );
}
