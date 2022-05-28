import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Postcard } from "components/postcard/Postcard";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export function Postlist({ isProfilePage }) {
  const { feedPosts, auth } = useSelector(store => store);
  const { posts } = feedPosts;
  const { id } = auth;
  // let myPosts = useMemo(()=>{
  //   return [];
  // },[])
  let myPosts=[]
  if (isProfilePage) {
    myPosts = posts.filter(p => p.author.id === id);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack direction="column" gap={3}>
          {( isProfilePage ? myPosts : posts)?.map(p => (
            <div key={p.postId}>
              <Postcard post={p} />
            </div>
          ))}
        </Stack>
      </ThemeProvider>
    </>
  );
}
