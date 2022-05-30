import { ThemeProvider } from "@emotion/react";
import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { theme } from "App";
import { deletePost, getUserFeedPosts } from "firebaseUtils/posts";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function PostMenu({ handlePostModalOpen, postId }) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditPost = () => {
    handlePostModalOpen();
    handleMenuClose();
  };
  const handleDeletePost = () => {
    deletePost(postId, dispatch, getUserFeedPosts);
    handleMenuClose();
  };
  const menuId = "primary-search-account-menu";
  const isMenuOpen = Boolean(anchorEl);
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleEditPost}> Edit </MenuItem>
      <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
    </Menu>
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit">
            <MoreVert />
          </IconButton>
        </Box>
        {renderMenu}
      </ThemeProvider>
    </>
  );
}
