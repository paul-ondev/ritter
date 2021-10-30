import React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/IosShare";

import { useStyles } from "../../Pages/Home";

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useStyles>;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  text,
  classes,
  user,
}: TweetProps): React.ReactElement => {
  return (
    <Paper
      className={classes.tweet}
      sx={{
        borderRadius: 0,
        paddingBottom: "15px",
        borderLeft: 0,
        borderRight: 0,
        paddingLeft: "20px",
        paddingRight: "30px",
        paddingTop: "20px",
      }}
      variant="outlined"
    >
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Avatar alt={`${user.userName}'s Avatar`} src={user.avatarUrl} />
        </Grid>
        <Grid item xs={11}>
          <div className={classes.tweetTop}>
            <span className={classes.tweetTopInfo}>
              {user.fullName}
              <b className={classes.tweetTopInfoUserLink}>@{user.userName}</b>
              <b className={classes.tweetTopInfoTweetDate}>
                {" "}
                <span className={classes.tweetTopInfoTweetDateCircle}></span>
                12 Oct
              </b>
            </span>
            <span className={classes.tweetTopInfoMore}>More</span>
          </div>
          <Typography
            sx={{ pt: 1.5, pb: 1.5, pr: 1.7 }}
            component="h6"
            gutterBottom
            variant="body1"
          >
            {text}
          </Typography>
          <div className={classes.footer}>
            <div>
              <IconButton>
                <ChatBubbleOutlineIcon color="primary" />
              </IconButton>
              <span>2</span>
            </div>
            <div>
              <IconButton>
                <RepeatIcon
                  color="primary"
                  sx={{
                    transform: "rotate(90deg)",
                  }}
                />
              </IconButton>
              <span>2</span>
            </div>
            <div>
              <IconButton>
                <FavoriteBorderIcon color="primary" />
              </IconButton>
              <span>2</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <ShareIcon color="primary" />
              </IconButton>
              <span>2</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
