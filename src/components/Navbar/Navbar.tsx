import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useUserStore } from "../../store/useUserStore";
import { InfoLogin } from "./InfoLogin";
import { InfoUser } from "./InfoUser";
// import styles from "./styles.module.scss";

export const Navbar = () => {
  const { user, isLoggedIn } = useUserStore();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" component="div">
              Biblioteka Frontowców
            </Typography>
            <AutoStoriesIcon fontSize="large" />
            <Box sx={{ display: "flex", gap: 1 }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Button color="inherit">Strona główna</Button>
              </Link>
              {user.role === "admin" && (
                <Link
                  to="/dashboard"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Button color="inherit">dashboard</Button>
                </Link>
              )}
              {user.role === "client" && (
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Button color="inherit">Profil</Button>
                </Link>
              )}
            </Box>
          </Box>
          <Box>{isLoggedIn ? <InfoUser /> : <InfoLogin />}</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
