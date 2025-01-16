import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { Badge, MenuItem } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const Message = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const messages = ["Proszę oddać książke Harry Potter"];

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          color="info"
          badgeContent={messages.length}
        >
          <MailIcon />
        </Badge>
      </IconButton>
      {messages && (
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {messages.map((message, index) => (
            <MenuItem key={index}>{message}</MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};
