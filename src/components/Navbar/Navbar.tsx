import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
// import styles from "./styles.module.scss";

export const Navbar = () => {
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
            </Box>
          </Box>
          <Box>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Button color="inherit">Rejestracja</Button>
            </Link>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Button color="inherit">Zaloguj się</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
