import { useSuspenseQuery } from "@tanstack/react-query";
import { useInput } from "../../hooks/useInput.ts";
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { usersOptions } from "../../queries/users.ts";
import { hasEmailAndPasswordInDataBase } from "../../utills/hasEmailAndPassworsInDataBase.ts";
import { useEffect, useState } from "react";
import { useCreateLogMutation } from "../../mutations/useCreateLogMutation.ts";
import { useNavigate } from "@tanstack/react-router";
import { LogDto } from "../../types/index.ts";

export const Login = () => {
  const emailInput = useInput("");
  const passwordInput = useInput("");
  const [error, setError] = useState(false);

  const { data } = useSuspenseQuery(usersOptions);
  const { mutate, isSuccess } = useCreateLogMutation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // ta funkcja sprawdza czy w bazie istnie użytkownik o podanym emailu i haśle
    // zwraca obiekt użytkownika lub null
    const user = hasEmailAndPasswordInDataBase(
      data,
      emailInput.value,
      passwordInput.value
    );
    if (user === null) return setError(true);

    const logData: LogDto = {
      userId: user.id,
      action: "login",
      timestamp: new Date().toISOString(),
    };
    mutate(logData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    navigate({ to: "/" });
  }, [isSuccess, navigate]);

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          display: "flex",
          marginTop: "4rem",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "100%" },
          "& .MuiButton-root": { m: 1, width: "100%" },
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h2" component="p">
          Miło cię widzieć
        </Typography>
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          {...emailInput}
        />
        <TextField
          required
          id="lastName"
          label="Hasło"
          type="password"
          variant="outlined"
          {...passwordInput}
        />

        <Button variant="contained" color="primary" type="submit">
          Zaloguj się
        </Button>
        {error && (
          <Alert severity="error">Nie prawidłowy login lub hasło </Alert>
        )}
      </Box>
    </Container>
  );
};
