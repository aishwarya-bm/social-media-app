import { Postcard } from "components/postcard/Postcard";
import { Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getUserFeedPosts } from "firebaseUtils/posts";
import { filterPosts, filterPostsByChip, getFeed } from "firebaseUtils/filters";
import { useParams } from "react-router-dom";
import { setProfilePosts } from "features/posts/postsSlice";
import { SkeletonPost } from "components";

export function Postlist({ type, filterByChip, isFollowingUser }) {
  const { feedPosts, auth } = useSelector(store => store);
  const { id, user } = auth;
  const { feed, isLoadingPosts } = feedPosts;
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const userId = profileId || id;
  let filteredPosts = useMemo(() => getFeed(feed, user), [feed, user]);
  let profilePosts = useMemo(() => filterPosts(filteredPosts, userId, type), [userId, filteredPosts, feed]);
  let filterByChipsPosts = filterPostsByChip(filteredPosts, filterByChip);
  filteredPosts = type ? profilePosts : filterByChipsPosts;

  useEffect(() => {
    dispatch(getUserFeedPosts());
  }, []);

  useEffect(() => {
    if (type === "profile") dispatch(setProfilePosts(filteredPosts));
  }, [feed, profileId, profilePosts]);

  return (
    <>
      <Stack direction="column" gap={3}>
        {filteredPosts?.length ? (
          filteredPosts?.map(p => (
            <div key={p.postId}>
              <Postcard post={p} />
            </div>
          ))
        ) : isLoadingPosts ? (
          <SkeletonPost />
        ) : (
          <Stack alignItems="center" mt={2}>
            <Typography gutterBottom component="div" sx={{ mt: 3, mb: 2 }} textAlign="center">
              {type
                ? isFollowingUser
                  ? "Oops, no posts in this list!"
                  : "Follow user to see their posts."
                : "Follow your friends to check their latest updates here."}
            </Typography>
            <img
              src={
                type
                  ? "https://cdn.iconscout.com/icon/premium/png-128-thumb/file-broken-5400710-4557870.png"
                  : "https://cdn.iconscout.com/icon/premium/png-128-thumb/follower-3047568-2536967.png"
              }
              alt="no-posts"
            />
          </Stack>
        )}
      </Stack>
    </>
  );
}
