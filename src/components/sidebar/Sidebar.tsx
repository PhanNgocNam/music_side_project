import { NavLink, useNavigate } from "react-router-dom";
import { navLinks } from "../../constant/navLinks";
import Search from "../search_box/Search";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="w-[20%] flex flex-col items-start h-full rounded-md bg-gradient-to-tl from-[#4285F4]/80 to-[#4285F4]/40 px-4">
      <div>logo</div>
      <div className="w-full">
        <Search />
        <ul className="w-full text-[1.4rem] font-bold text-white/80">
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
                {navLink.link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>username</div>
    </div>
  );
}
