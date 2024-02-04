import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/vi/home")}
      className="w-[20%] h-full rounded-md bg-gradient-to-tl from-[#4285F4]/80 to-[#4285F4]/40"
    >
      Sidebar
    </div>
  );
}
