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
    title: "Notifications",
    nav_icon: <Notifications fontSize="medium" />,
    nextUrl: "/notifications",
  },
  {
    id: 4,
    title: "Messages",
    nav_icon: <Message fontSize="medium" />,
    nextUrl: "/messages",
  },
  {
    id: 5,
    title: "Saved",
    nav_icon: <Bookmark fontSize="medium" />,
    nextUrl: "/saved",
  },
  {
    id: 6,
    title: "Profile",
    nav_icon: <AccountCircle fontSize="medium" />,
    nextUrl: "/profile",
  },
];