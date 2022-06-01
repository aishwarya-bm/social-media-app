import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Postcard } from "components/postcard/Postcard";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getUserFeedPosts } from "firebaseUtils/posts";
import { filterMyPosts } from "firebaseUtils/filters";
import { useParams } from "react-router-dom";
import { setMyPosts } from "features/posts/postsSlice";

export function Postlist({ isProfilePage, isSavedPage, isLikedPage }) {
  const { feedPosts, auth } = useSelector(store => store);
  const {id} = auth;
  const { feed } = feedPosts;
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const userId = isProfilePage ? profileId : id;
  const filteredPosts = useMemo(
    () => filterMyPosts(feed, userId, isProfilePage, isSavedPage, isLikedPage),
    [profileId, feed]
  );
  useEffect(() => {
    dispatch(getUserFeedPosts());
  }, []);

  useEffect(() => {
    dispatch(setMyPosts(filteredPosts));
  }, [feed, profileId]);

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
