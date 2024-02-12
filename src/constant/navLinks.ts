import { MdOutlineLibraryMusic } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";
import { PiContactlessPayment } from "react-icons/pi";

export const navLinks = [
  {
    id: "#nav_1",
    link: "Trang chủ",
    icon: RiHome4Line,
    to: "/p2n/home",
  },
  {
    id: "#nav_2",
    link: "Thư viện",
    icon: MdOutlineLibraryMusic,
    to: "/p2n/lib",
  },
  {
    id: "#nav_3",
    link: "Liên hệ",
    icon: PiContactlessPayment,
    to: "/p2n/#",
  },
];
