import { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput.ts";
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { UserDto } from "../../types/index.ts";
import { v4 as uuidv4 } from "uuid";
import { useCreateUserMutation } from "../../mutations/useCreatePartMutation.ts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { usersOptions } from "../../queries/users.ts";
import { hasEmailInDataBase } from "../../utills/hasEmailInDataBase.ts";
import { useNavigate } from "@tanstack/react-router";
import CheckIcon from "@mui/icons-material/Check";

export const Register = () => {
  const firstNameInput = useInput("");
  const lastNameInput = useInput("");
  const emailNameInput = useInput("");
  const passwordNameInput = useInput("");
  const passwordNameInput2 = useInput("");
  const [diffrentPassword, setDiffrentPassword] = useState(false);
  const [emailInDataBase, setEmailInDataBase] = useState(false);

  const { mutate, isSuccess } = useCreateUserMutation();
  const { data } = useSuspenseQuery(usersOptions);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    //weryfikacja poprwności hasła
    if (passwordNameInput.value !== passwordNameInput2.value) {
      setDiffrentPassword(true);
    } else {
      setDiffrentPassword(false);

      //weryfikacja czy podany email istnieje w bazie
      if (hasEmailInDataBase(data, emailNameInput.value)) {
        setEmailInDataBase(true);
      } else {
        const formData: UserDto = {
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          email: emailNameInput.value,
          password: passwordNameInput.value,
          role: "client",
          libraryCardCode: uuidv4(),
        };
        mutate(formData);
      }
    }
  };

  useEffect(() => {
    if (!isSuccess) return;
    setTimeout(() => {
      navigate({ to: "/login" });
    }, 2000);
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
          Rejestracja
        </Typography>
        <TextField
          required
          id="firstName"
          label="Imię"
          variant="outlined"
          {...firstNameInput}
        />
        <TextField
          required
          id="lastName"
          label="Nazwisko"
          variant="outlined"
          {...lastNameInput}
        />
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          error={emailInDataBase}
          helperText={
            emailInDataBase
              ? "Już istnieje użytkownik z takim adresem e-mail."
              : ""
          }
          {...emailNameInput}
        />
        <TextField
          required
          id="password"
          label="Hasło"
          type="password"
          variant="outlined"
          {...passwordNameInput}
        />
        <TextField
          required
          id="password2"
          label="Powtórz Hasło"
          type="password"
          variant="outlined"
          error={diffrentPassword}
          helperText={diffrentPassword ? "Hasło nie jest identyczne" : ""}
          {...passwordNameInput2}
        />
        <Button variant="contained" color="primary" type="submit">
          Załóż konto
        </Button>
        {isSuccess && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Konto zostało założone
          </Alert>
        )}
      </Box>
    </Container>
  );
};
