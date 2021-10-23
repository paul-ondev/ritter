import React from "react";

import { Typography, Button, FormControl } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";

import { ModalBox } from "../components/ModalBox";

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

  const [visibleModal, setVisibleModal] = React.useState<"signIn" | "signUp">();

  function handleOpenSignIn(): void {
    setVisibleModal("signIn");
  }

  function handleOpenSignUp(): void {
    setVisibleModal("signUp");
  }

  function handleCloseModal(): void {
    setVisibleModal(undefined);
  }

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
              onClick={handleOpenSignUp}
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
              onClick={handleOpenSignIn}
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
      <ModalBox
        handleClick={handleCloseModal}
        visible={visibleModal === "signIn"}
        title="Sign In to Twitter"
      >
        <FormControl>
          <TextField
            autoFocus
            fullWidth
            sx={{ mb: 3 }}
            id="filled-basic"
            label="E-mail"
            type="email"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            // sx={{ width: 300 }}
          />
        </FormControl>
        <DialogActions>
          <Button variant="contained" sx={{ color: "white", mt: 3 }} fullWidth>
            Sign In
          </Button>
        </DialogActions>
      </ModalBox>
      <ModalBox
        handleClick={handleCloseModal}
        visible={visibleModal === "signUp"}
        title="Create your account"
      >
        <FormControl>
          <TextField
            autoFocus
            fullWidth
            sx={{ mb: 6 }}
            id="filled-basic"
            label="Name"
            type="name"
            variant="filled"
          />
          <TextField
            fullWidth
            sx={{ mb: 5 }}
            id="filled-basic"
            label="E-mail"
            type="email"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            // sx={{ width: 300 }}
          />
        </FormControl>
        <DialogActions>
          <Button variant="contained" sx={{ color: "white", mt: 3 }} fullWidth>
            Next
          </Button>
        </DialogActions>
      </ModalBox>
    </>
  );
}

export default SignIn;
