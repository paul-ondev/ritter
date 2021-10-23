import React from "react";

import { IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  visible: boolean;
  handleClick: () => void;
}

export const ModalBox: React.FC<ModalProps> = ({
  title,
  children,
  visible,
  handleClick,
}): React.ReactElement | null => {
  if (!visible) {
    return null;
  }

  return (
    <Dialog open={visible} fullWidth maxWidth="sm">
      <DialogTitle>
        <IconButton onClick={handleClick}>
          <CloseIcon sx={{ color: "primary.main" }} />
        </IconButton>
        <b>{title}</b>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
