import { AccountCircle, Bookmark, Home, Message, Notifications } from "@mui/icons-material";

export const sidenavItems = [
  {
    id: 1,
    title: "Home",
    nav_icon: <Home fontSize="medium" />,
    nextUrl: "/",
  },
  {
    id: 2,
    title: "Notifications",
    nav_icon: <Notifications fontSize="medium" />,
    nextUrl: "/notifications",
  },
  {
    id: 3,
    title: "Messages",
    nav_icon: <Message fontSize="medium" />,
    nextUrl: "/messages",
  },
  {
    id: 4,
    title: "Bookmarks",
    nav_icon: <Bookmark fontSize="medium" />,
    nextUrl: "/bookmarks",
  },
  {
    id: 5,
    title: "Profile",
    nav_icon: <AccountCircle fontSize="medium" />,
    nextUrl: "/profile",
  },
];