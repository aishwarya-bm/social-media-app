import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Postcard } from "components/postcard/Postcard";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getUserFeedPosts } from "firebaseUtils/posts";
import { filterMyPosts } from "firebaseUtils/filters";
import { useParams } from "react-router-dom";

export function Postlist({ isProfilePage, isSavedPage, isLikedPage }) {
  const { feedPosts } = useSelector(store => store);
  const { posts } = feedPosts;
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const filteredPosts = useMemo(
    () => filterMyPosts(posts, profileId, isProfilePage, isSavedPage, isLikedPage),
    [profileId, posts]
  );
  useEffect(() => {
    dispatch(getUserFeedPosts());
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack direction="column" gap={3}>
          {filteredPosts?.map(p => (
            <div key={p.postId}>
              <Postcard post={p} />
            </div>
          ))}
        </Stack>
      </ThemeProvider>
    </>
  );
}
