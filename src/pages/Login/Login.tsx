import { useInput } from "../../hooks/useInput.ts";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

// import { useCreateUserMutation } from "../../mutations/useCreatePartMutation.ts";

export const Login = () => {
  const emailInput = useInput("");
  const passwordInput = useInput("");

  // const { mutate } = useCreateUserMutation();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log({
      emailInput: emailInput.value,
      passwordInput: passwordInput.value,
    });
    //   mutate(formData);
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
          variant="outlined"
          {...passwordInput}
        />

        <Button variant="contained" color="primary" type="submit">
          Zaloguj się
        </Button>
      </Box>
    </Container>
  );
};
