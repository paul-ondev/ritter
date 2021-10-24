import React from "react";

import { makeStyles } from "@mui/styles";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/IosShare";
import { transform } from "typescript";

const useStyles = makeStyles(() => ({
  sideMenuList: {
    paddingLeft: 5,
  },
  sideMenuItem: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    paddingLeft: 15,
  },
  searchField: {
    backgroundColor: "#F6F9F9",
    border: 0,
    borderRadius: 30,
    width: "100%",
    height: 60,
    color: "#526371",
  },
  tweetTop: {
    paddingRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tweetTopInfo: {
    fontWeight: 700,
  },
  tweetTopInfoUserLink: {
    fontWeight: 300,
    color: "#526371",
    marginRight: 22,
  },
  tweetTopInfoTweetDate: {
    fontWeight: 300,
    color: "#526371",

    "&::before": {
      content: "''",
      display: "inline",
      backgroundColor: "#526371",
      height: 10,
      width: 10,
      border: 3,
      borderColor: "#526371",
    },
  },
  tweetTopInfoMore: {},
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 70,
  },
}));

// const styles = {
//   sideMenuItem: {
//     marginLeft: 15,
//   },
// };

export const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Container sx={{}} maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ul className={classes.sideMenuList}>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <TwitterIcon sx={{ fontSize: 42 }} color="primary" />
                </IconButton>
              </li>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <SearchIcon
                    sx={{ color: "common.black", fontSize: 30, mr: 1.5 }}
                  />
                </IconButton>
                <Typography sx={{ fontWeight: "fontWeightBold" }} variant="h6">
                  Explore
                </Typography>
              </li>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <NotificationsNoneIcon
                    sx={{ color: "common.black", fontSize: 30, mr: 1.5 }}
                  />
                </IconButton>
                <Typography sx={{ fontWeight: "fontWeightBold" }} variant="h6">
                  Notifications
                </Typography>
              </li>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <MailOutlineIcon
                    sx={{ color: "common.black", fontSize: 30, mr: 1.5 }}
                  />
                </IconButton>
                <Typography sx={{ fontWeight: "fontWeightBold" }} variant="h6">
                  Messages
                </Typography>
              </li>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <PersonOutlineIcon
                    sx={{ color: "common.black", fontSize: 30, mr: 1.5 }}
                  />
                </IconButton>
                <Typography sx={{ fontWeight: "fontWeightBold" }} variant="h6">
                  Profile
                </Typography>
              </li>
              <li className={classes.sideMenuItem}>
                <IconButton>
                  <MoreHorizIcon
                    sx={{ color: "common.black", fontSize: 30, mr: 1.5 }}
                  />
                </IconButton>
                <Typography sx={{ fontWeight: "fontWeightBold" }} variant="h6">
                  More
                </Typography>
              </li>
              <li></li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Paper
              sx={{
                height: "100%",
                borderTop: 0,
                borderBottom: 0,
                borderRadius: 0,
              }}
              variant="outlined"
            >
              <Paper
                sx={{
                  borderRadius: 0,
                  borderTop: 0,
                  borderLeft: 0,
                  borderRight: 0,
                  paddingLeft: "15px",
                  paddingTop: "20px",
                  height: 58,
                }}
                variant="outlined"
              >
                <Typography sx={{ fontWeight: "fontWeightBold" }} variant="h6">
                  Home
                </Typography>
              </Paper>

              <Paper
                sx={{
                  borderRadius: 0,
                  paddingBottom: "15px",
                  borderLeft: 0,
                  borderRight: 0,
                  paddingLeft: "15px",
                  paddingTop: "20px",
                }}
                variant="outlined"
              >
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <Avatar
                      alt="User Avatar"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <div className={classes.tweetTop}>
                      <span className={classes.tweetTopInfo}>
                        Elon Musk{" "}
                        <b className={classes.tweetTopInfoUserLink}>
                          @elonmusk
                        </b>
                        <b className={classes.tweetTopInfoTweetDate}>12 Oct</b>
                      </span>
                      <span className={classes.tweetTopInfoMore}>More</span>
                    </div>
                    <Typography
                      sx={{ pt: 1.5, pb: 1.5, pr: 1.7 }}
                      component="h6"
                      gutterBottom
                      variant="body1"
                    >
                      If you’d like to join Tesla AI, but can’t easily move to
                      Palo Alto or Austin, that is acceptable for extremely
                      excellent candidates where inefficiency of distance is
                      overcome by talent
                    </Typography>
                    <div className={classes.footer}>
                      <div>
                        <IconButton>
                          <ChatBubbleOutlineIcon />
                        </IconButton>
                        <span>2</span>
                      </div>
                      <div>
                        <IconButton>
                          <RepeatIcon sx={{ transform: "rotate(90deg)" }} />
                        </IconButton>
                        <span>2</span>
                      </div>
                      <div>
                        <IconButton>
                          <FavoriteBorderIcon />
                        </IconButton>
                        <span>2</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <IconButton>
                          <ShareIcon />
                        </IconButton>
                        <span>2</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <div>
              <input
                className={classes.searchField}
                placeholder="Search Twitter"
                type="search"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
