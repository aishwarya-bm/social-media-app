import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Postcard } from "components/postcard/Postcard";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getUserFeedPosts } from "firebaseUtils/posts";
import { filterPosts, filterPostsByChip, getFeed } from "firebaseUtils/filters";
import { useParams } from "react-router-dom";
import { setProfilePosts } from "features/posts/postsSlice";

export function Postlist({ type, filterByChip }) {
  const { feedPosts, auth } = useSelector(store => store);
  const { id, user } = auth;
  const { feed } = feedPosts;
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const userId = profileId || id;
  let filteredPosts = useMemo(() =>getFeed(feed, user),[feed,user]);
  let profilePosts = useMemo(() => filterPosts(filteredPosts, userId, type), [userId, feed]);
  let filterByChipsPosts = filterPostsByChip(filteredPosts, filterByChip);
  filteredPosts = (type ? profilePosts : filterByChipsPosts);

  useEffect(() => {
    dispatch(getUserFeedPosts());
  }, []);

  useEffect(() => {
    if (type === "profile") dispatch(setProfilePosts(filteredPosts));
  }, [feed, profileId, profilePosts]);

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
