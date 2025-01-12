import { useState } from "react";
import { useInput } from "../../hooks/useInput.ts";
import { Box, Button, Container, TextField } from "@mui/material";
import { UserDto } from "../../types/index.ts";
import { v4 as uuidv4 } from "uuid";

export const Register = () => {
  const firstNameInput = useInput("");
  const lastNameInput = useInput("");
  const emailNameInput = useInput("");
  const passwordNameInput = useInput("");
  const passwordNameInput2 = useInput("");
  const [diffrentPassword, setDiffrentPassword] = useState(false);

  // const { data } = useSuspenseQuery(usersOptions);
  // const { mutate } = useCreateUserMutation();
  // console.log(data);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (passwordNameInput.value !== passwordNameInput2.value) {
      setDiffrentPassword(true);
    } else {
      setDiffrentPassword(false);

      const formData: UserDto = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailNameInput.value,
        password: passwordNameInput.value,
        role: "client",
        libraryCardCode: uuidv4(),
      };
      console.log(formData);
      //   mutate(formData);
    }
  };

  //   useEffect(() => {
  //     if (!isSuccess) return;
  //     console.log(isSuccess);
  //   }, [isSuccess]);

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "100%" },
          "& .MuiButton-root": { m: 1, width: "100%" },
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
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
      </Box>
    </Container>
  );
};
