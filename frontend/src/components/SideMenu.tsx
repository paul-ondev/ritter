import React from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CreateIcon from "@mui/icons-material/Create";

import { useStyles } from "../Pages/Home";
const styles = {
  sideMenuItemText: { pl: 1.5, display: { sm: "none", md: "block" } },
  tweetBtn: {
    fontSize: 20,
    mb: 3,
    width: 220,
    height: 60,
    color: "common.white",
    display: { md: "block", xs: "none" },
  },
  tweetBtnSmall: {
    height: 60,
    width: 60,
    backgroundColor: "primary.main",
    display: { md: "none", xs: "block" },
    "&:hover": {
      backgroundColor: "darken(primary.main, 20%)",
    },
  },
};

interface SideMenuProps {
  classes: ReturnType<typeof useStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuItem}>
        <IconButton>
          <TwitterIcon sx={{ fontSize: 50 }} color="primary" />
        </IconButton>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <SearchIcon sx={{ color: "common.black", fontSize: 40 }} />

          <Typography sx={styles.sideMenuItemText} variant="h6">
            Explore
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <NotificationsNoneIcon sx={{ color: "common.black", fontSize: 40 }} />

          <Typography sx={styles.sideMenuItemText} variant="h6">
            Notifications
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <MailOutlineIcon sx={{ color: "common.black", fontSize: 40 }} />

          <Typography sx={styles.sideMenuItemText} variant="h6">
            Messages
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <PersonOutlineIcon sx={{ color: "common.black", fontSize: 40 }} />

          <Typography sx={styles.sideMenuItemText} variant="h6">
            Profile
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <MoreHorizIcon sx={{ color: "common.black", fontSize: 40 }} />

          <Typography sx={styles.sideMenuItemText} variant="h6">
            More
          </Typography>
        </div>
      </li>
      <li>
        <Button sx={styles.tweetBtn} variant="contained" fullWidth>
          Tweet
        </Button>
        <IconButton sx={styles.tweetBtnSmall}>
          <CreateIcon />
        </IconButton>
      </li>
    </ul>
  );
};
