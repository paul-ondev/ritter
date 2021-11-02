import React from "react";

import { makeStyles } from "@mui/styles";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { SideMenu } from "../components/SideMenu";
import { Tweet } from "../components/Tweet";

export const useStyles = makeStyles((theme) => ({
  sideMenuList: {
    paddingLeft: 5,
  },
  sideMenuItem: {
    "&:first-child": {
      paddingTop: 15,
    },
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(29,161,242,0.1)",
        "& h6": {
          color: "#0D9AFB",
        },
        "& svg path": {
          fill: "#0D9AFB",
        },
      },
    },
    "& div": {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: 30,
      padding: "10px 20px 10px 15px",
      transition: "background-color 0.1s ease-in-out",
    },

    cursor: "pointer",
    paddingLeft: 15,
    paddingBottom: 15,
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
    paddingRight: 40,
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
    marginLeft: 10,
  },
  tweetTopInfoTweetDate: {
    fontWeight: 300,
    color: "#526371",
  },
  tweetTopInfoTweetDateCircle: {
    width: 10,

    height: 10,
    backgroundColor: "#526371",
    border: 3,
    borderRadius: "50%",
    borderColor: "#526371",
  },
  tweet: {
    paddingTop: 10,

    cursor: "pointer",
    "&:hover": {
      background: "rgb(245, 248, 250)",
    },
  },
  tweetTopInfoMore: {},
  tweetFooter: {
    position: "relative",
    left: -10,
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
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <SideMenu classes={classes} />
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

              <Tweet
                text="If you’d like to join Tesla AI, but can’t easily move to Palo Alto
                or Austin, that is acceptable for extremely excellent candidates
                where inefficiency of distance is overcome by talent"
                classes={classes}
                user={{
                  fullName: "Elon Musk",
                  userName: "elonmusk",
                  avatarUrl:
                    "data:image/jpeg;base64,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",
                }}
              />
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
