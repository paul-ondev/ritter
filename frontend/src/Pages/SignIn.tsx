import React from "react";

import { Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
  },
  left: {
    flex: "0 0 50%",
    backgroundColor: "#0D9AFB",
    height: "100vh",
  },
  right: {
    flex: "0 0 50%",
    height: "100vh",
  },
  logInBlock: {
    marginTop: 180,
    marginLeft: 50,
    maxWidth: 400,
  },
  footerBlock: {
    height: 80,
    width: "100%",
    backgroundColor: "white",
    color: "GrayText",
  },
});

function SignIn() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <section className={classes.left}></section>
        <section className={classes.right}>
          <div className={classes.logInBlock}>
            <TwitterIcon sx={{ fontSize: 80 }} color="primary" />
            <Typography
              sx={{ mb: 2 }}
              fontWeight="bold"
              variant="h2"
              component="h2"
            >
              Happening now
            </Typography>
            <Typography
              sx={{ mb: 4 }}
              fontWeight="Medium"
              variant="h6"
              component="h6"
            >
              Join Twitter today.
            </Typography>
            <Button
              sx={{
                fontSize: "fontSize",
                mb: 3,
                width: 300,
                color: "common.white",
              }}
              variant="contained"
              fullWidth
            >
              Sign Up
            </Button>
            <Button
              sx={{ fontSize: "fontSize", textTransform: "none", width: 300 }}
              variant="outlined"
              fullWidth
            >
              Sign In
            </Button>
          </div>
        </section>
      </div>
      <footer className={classes.footerBlock}>do not copy</footer>
    </>
  );
}

export default SignIn;
