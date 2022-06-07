import { Avatar, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appTheme } from "theme-util";
import "./commentcard.css";
export function CommentCard({ comment }) {
  const { author, createdAt, comment: content } = comment;
  const commentDateTime =
    new Date(createdAt?.seconds * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) +
    ", " +
    new Date(createdAt?.seconds * 1000).toLocaleDateString();

  const { mode } = useSelector(store => store.theme);
  const {palette:{common :{black, white,icon}}} = appTheme(mode);
  const bgColor = mode === "light" ? "var(--grey-bg)" : "icon.dark";
  const fColor = mode === "light" ? black : white;

  return (
    <>
        <div>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Link to={`/profile/${author?.id}`}>
              <Avatar
                aria-label="comment-author"
                sx={{ width: 32, height: 32 }}
                alt={author?.firstname?.charAt(0)}
                src={author?.avatar}
              />
            </Link>
            <Link to={`/profile/${author?.id}`}>
              <Typography variant="subtitle2" color="primary.dark" >{`${author?.firstname} ${author?.lastname}`}</Typography>
            </Link>
            <Typography variant="caption">{commentDateTime}</Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              backgroundColor: bgColor,
              padding: 1,
              borderRadius: 4,
              marginLeft: 5,
              marginRight: 2,
              width: "fit-content",
            }}>
            {content}
          </Typography>
        </div>
    </>
  );
}
