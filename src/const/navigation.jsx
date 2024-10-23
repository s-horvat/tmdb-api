import { TbDeviceTv } from "react-icons/tb";
import { BiCameraMovie } from "react-icons/bi";
import { RiHomeLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

export const navigation = [
  {
    label: "TV Shows",
    href: "tv",
    icon: <TbDeviceTv />,
  },
  {
    label: "Movies",
    href: "movies",
    icon: <BiCameraMovie />,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <RiHomeLine />,
  },
  ...navigation,
  {
    label: "search",
    href: "/search",
    icon: <IoIosSearch />,
  },
];
