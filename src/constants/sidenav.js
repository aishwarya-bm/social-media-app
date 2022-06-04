import { AccountCircle, Bookmark, Explore, Home, Message, Notifications } from "@mui/icons-material";

export const sidenavItems = [
  {
    id: 1,
    title: "Home",
    nav_icon: <Home fontSize="medium" />,
    nextUrl: "/home",
  },
  {
    id: 2,
    title: "Explore",
    nav_icon: <Explore fontSize="medium" />,
    nextUrl: "/explore",
  },
  {
    id: 3,
    title: "Saved",
    nav_icon: <Bookmark fontSize="medium" />,
    nextUrl: "/saved",
  },
  {
    id: 4,
    title: "Profile",
    nav_icon: <AccountCircle fontSize="medium" />,
    nextUrl: "/profile",
  },
];