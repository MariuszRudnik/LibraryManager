import { Box, Typography } from "@mui/material";
import { Avatar } from "../avatar/Avatar";
import { useUserStore } from "../../store/useUserStore";

export const InfoUser = () => {
  const {
    user: { firstName, lastName },
  } = useUserStore();
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body1" component="p">
        {`${firstName} ${lastName}`}
      </Typography>
      <Avatar />
    </Box>
  );
};
