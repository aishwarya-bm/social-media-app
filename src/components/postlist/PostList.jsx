import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Postcard } from "components/postcard/Postcard";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { getUserFeedPosts } from "firebaseUtils/posts";

export function Postlist() {
  const posts = [
    {
      id: 1,
      author: "Aishwarya Biradar",
      postDate: "September 17,2020",
      media: "",
      content:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas with the mussels, if you like.",
      comments: [
        {
          comment_author: "Aishwarya Biradar",
          comment_date: "September 20, 2020",
          comment_content:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas with the mussels, if you like.",
          comment_author_avatar: "https://picsum.photos/200/300",
          comment_id: 1,
        },
        {
          comment_author: "Aishwarya Biradar",
          comment_date: "September 20, 2020",
          comment_content: "Good recipe",
          comment_author_avatar: "https://picsum.photos/200/300",
          comment_id: 1,
        },
      ],
    },
    {
      id: 2,
      author: "Aishwarya Biradar",
      postDate: "September 17,2020",
      media: "https://picsum.photos/200/300",
      content:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas with the mussels, if you like.",
      comments: [
        {
          comment_author: "Aishwarya Biradar",
          comment_date: "September 20, 2020",
          comment_content: "Good recipe",
          comment_author_avatar: "https://picsum.photos/200/300",
          comment_id: 1,
        },
        {
          comment_author: "Aishwarya Biradar",
          comment_date: "September 20, 2020",
          comment_content: "Good recipe",
          comment_author_avatar: "https://picsum.photos/200/300",
          comment_id: 1,
        },
      ],
    },
  ];

  useEffect(() => {
    getUserFeedPosts()
  },[]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack direction="column" gap={3}>
          {posts.map(p => (
            <Postcard post={p}/>
          ))}
        </Stack>
      </ThemeProvider>
    </>
  );
}
