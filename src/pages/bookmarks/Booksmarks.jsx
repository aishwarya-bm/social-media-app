import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Box } from "@mui/system";
import { Postcard } from "components/postcard/Postcard";
export function Bookmarks() {
    const posts = [
      {
        id: 1,
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "grid", gap: 1 }} rowGap="1rem">
          {posts.map(p => (
            <Postcard post={p} />
          ))}
        </Box>
      </ThemeProvider>
    </>
  );
}
