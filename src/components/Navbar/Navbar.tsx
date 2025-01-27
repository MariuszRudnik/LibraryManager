import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useLocation, useNavigate } from "@tanstack/react-router";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useUserStore } from "../../store/useUserStore";
import { InfoLogin } from "./InfoLogin";
import { InfoUser } from "./InfoUser";
import { brown } from "@mui/material/colors";
// import styles from "./styles.module.scss";

export const Navbar = () => {
  const { user, isLoggedIn } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography data-testid="header" variant="h6" component="div">
            Biblioteka Frontowców
          </Typography>
          <AutoStoriesIcon fontSize="large" />
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Button
              color="inherit"
              onClick={() => navigate({ to: "/" })}
              sx={{
                bgcolor: location.pathname === "/" ? brown[700] : "",
              }}
            >
              Strona główna
            </Button>

            {user.role === "admin" && (
              <Button
                color="inherit"
                onClick={() => navigate({ to: "/dashboard/books" })}
                sx={{
                  bgcolor: /dashboard/.test(location.pathname)
                    ? brown[700]
                    : "",
                }}
              >
                dashboard
              </Button>
            )}
            {user.role === "client" && (
              <Button
                color="inherit"
                onClick={() => navigate({ to: "/profil" })}
                sx={{
                  bgcolor: /profil/.test(location.pathname) ? brown[700] : "",
                }}
              >
                Profil
              </Button>
            )}
          </Box>
        </Box>
        <Box>{isLoggedIn ? <InfoUser /> : <InfoLogin />}</Box>
      </Toolbar>
    </AppBar>
  );
};
