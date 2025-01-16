import { Box, Typography } from "@mui/material";
import { Avatar } from "../avatar/Avatar";
import { useUserStore } from "../../store/useUserStore";

import { Message } from "../Message";

export const InfoUser = () => {
  const {
    user: { firstName, lastName, libraryCardCode },
  } = useUserStore();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Message />
      {`Numer Karty ${libraryCardCode}`}
      <Typography variant="body1" component="p">
        {`${firstName} ${lastName}`}
      </Typography>

      <Avatar />
    </Box>
  );
};
