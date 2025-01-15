import { Button } from "@mui/material";
import { Link } from "@tanstack/react-router";

export const InfoLogin = () => {
  return (
    <>
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
    </>
  );
};
