import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { Badge, MenuItem } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useSuspenseQuery } from '@tanstack/react-query';
import { messagesOptions } from '../queries/messages';
import { useUserStore } from '../store/useUserStore';
import { useNavigate } from '@tanstack/react-router';

export const Message = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { user } = useUserStore();
  const { data: messages } = useSuspenseQuery(messagesOptions(user.id));
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = () => {
    navigate({ to: '/profil/myBorrowedBooks' });
    handleClose();
  };

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
            vertical: 'top',
            horizontal: 'left',
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
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {messages.map((message) => (
            <MenuItem onClick={handleNavigate} key={message.id}>
              {message.message}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};
