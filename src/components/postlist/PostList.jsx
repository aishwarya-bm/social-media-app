import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Postcard } from "components/postcard/Postcard";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getUserFeedPosts } from "firebaseUtils/posts";
import { filterPosts } from "firebaseUtils/filters";
import { useParams } from "react-router-dom";
import { setProfilePosts } from "features/posts/postsSlice";

export function Postlist({ type }) {
  const { feedPosts, auth } = useSelector(store => store);
  const {id} = auth;
  const { feed } = feedPosts;
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const userId = (type==="profile" ? profileId : id);
  const filteredPosts = useMemo(
    () => filterPosts(feed, userId, type),
    [profileId, feed]
  );
  useEffect(() => {
    dispatch(getUserFeedPosts());
  }, []);

  useEffect(() => {
   if(type==="profile") dispatch(setProfilePosts(filteredPosts));
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
