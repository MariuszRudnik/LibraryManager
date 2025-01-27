import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
} from '@mui/material';
import { brown } from '@mui/material/colors';
import { ReactElement } from 'react';

export type SingleItemButtonProps = {
  open: boolean;
  onClick: () => void;
  text: string;
  icon: ReactElement<SvgIconProps>;
  isActive: boolean;
};

export const SingleItemButton = ({
  open,
  onClick,
  text,
  icon,
  isActive,
}: SingleItemButtonProps) => {
  return (
    <ListItemButton
      onClick={onClick}
      sx={[
        {
          minHeight: 48,
          px: 2.5,
          bgcolor: isActive ? brown[600] : '',
        },
        open
          ? {
              justifyContent: 'initial',
            }
          : {
              justifyContent: 'center',
            },
      ]}
    >
      <ListItemIcon
        sx={[
          {
            minWidth: 0,
            justifyContent: 'center',
          },
          open
            ? {
                mr: 3,
              }
            : {
                mr: 'auto',
              },
        ]}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={text}
        sx={[
          open
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              },
        ]}
      />
    </ListItemButton>
  );
};
