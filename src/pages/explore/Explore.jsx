import { SortOutlined } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FilterChips, Postlist } from "components";
import { Postcard } from "components/postcard/Postcard";
import { filterPostsByChip } from "firebaseUtils/filters";
import { getUserFeedPosts } from "firebaseUtils/posts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Explore() {
  const dispatch = useDispatch();
  const {
    feedPosts: { feed },
  } = useSelector(store => store);

  const [showFilter, setShowFilter] = useState(false);
  const [filterBy, setFilterBy] = useState("recent");
  const handleClick = e => {
    setFilterBy(e.target.innerText);
  };
  const handleClose = () => {
    setShowFilter(prev => !prev);
  };
  let filterByChipsPosts = filterPostsByChip(feed, filterBy);

  useEffect(() => {
    dispatch(getUserFeedPosts());
  }, []);

  return (
    <>
      <Box sx={{ marginTop: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" margin={1} mt={5}>
          <Typography variant="h6" gutterBottom component="div">
            Explore
          </Typography>
          <Button startIcon={<SortOutlined />} aria-label="filter" color="secondary" onClick={() => handleClose()}>
            Sort
          </Button>
        </Stack>
      </Box>
      {showFilter && <FilterChips filterBy={filterBy} handleClick={handleClick} />}
      <Stack direction="column" gap={3}>
        {filterByChipsPosts?.map(p => (
          <div key={p.postId}>
            <Postcard isExplorePage={true} post={p} />
          </div>
        ))}
      </Stack>
    </>
  );
}
