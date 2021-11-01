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

import { useStyles } from "../Pages/Home";

const styleBtn = {
  fontSize: 20,
  mb: 3,
  width: 220,
  height: 60,
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
          <TwitterIcon sx={{ fontSize: 42 }} color="primary" />
        </IconButton>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <SearchIcon sx={{ color: "common.black", fontSize: 30 }} />

          <Typography sx={{ pl: 1.5 }} variant="h6">
            Explore
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <NotificationsNoneIcon sx={{ color: "common.black", fontSize: 30 }} />

          <Typography sx={{ pl: 1.5 }} variant="h6">
            Notifications
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <MailOutlineIcon sx={{ color: "common.black", fontSize: 30 }} />

          <Typography sx={{ pl: 1.5 }} variant="h6">
            Messages
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <PersonOutlineIcon sx={{ color: "common.black", fontSize: 30 }} />

          <Typography sx={{ pl: 1.5 }} variant="h6">
            Profile
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <MoreHorizIcon sx={{ color: "common.black", fontSize: 30 }} />

          <Typography sx={{ pl: 1.5 }} variant="h6">
            More
          </Typography>
        </div>
      </li>
      <li>
        <Button
          sx={{ ...styleBtn, color: "common.white" }}
          variant="contained"
          fullWidth
        >
          Tweet
        </Button>
      </li>
    </ul>
  );
};
