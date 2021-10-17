import React from "react";

import { Button, IconButton, Divider, FormControl } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

const Modal = () => {
  const [visibleSignInDialog, setVisibleSignInDialog] = React.useState(false);

  function handleClickSignIn(type: string) {
    if (type === "open") {
      setVisibleSignInDialog(true);
    } else if (type === "close") {
      setVisibleSignInDialog(false);
    }
  }

  return (
    <Dialog open={visibleSignInDialog} fullWidth maxWidth="sm">
      <DialogTitle>
        <IconButton
          onClick={() => {
            handleClickSignIn("close");
          }}
        >
          <CloseIcon sx={{ color: "primary.main" }} />
        </IconButton>
        <b>Sign In to Twitter</b>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
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
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
