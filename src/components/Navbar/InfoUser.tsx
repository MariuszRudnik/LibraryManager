import { Box, Typography } from "@mui/material";
import { Avatar } from "../avatar/Avatar";
import { useUserStore } from "../../store/useUserStore";

import { Message } from "../Message";

export const InfoUser = () => {
  const {
    user: { firstName, lastName, libraryCardCode, role },
  } = useUserStore();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      {role === "client" && <Message />}

      {role === "admin" ? (
        <Typography variant="body1" component="p">
          <b>Konto Administratora</b>
        </Typography>
      ) : (
        <Typography variant="body1" component="p">
          {`Numer Karty ${libraryCardCode}`}
        </Typography>
      )}

      <Typography variant="body1" component="p">
        {`${firstName} ${lastName}`}
      </Typography>

      <Avatar />
    </Box>
  );
};
