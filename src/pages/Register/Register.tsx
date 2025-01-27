import { useEffect, useState } from 'react';
import { useInput } from '../../hooks/useInput.ts';
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { UserDto } from '../../types/index.ts';
import { useCreateUserMutation } from '../../mutations/useCreateUserMutation.ts';
import { useSuspenseQuery } from '@tanstack/react-query';
import { usersOptions } from '../../queries/users.ts';
import { hasEmailInDataBase } from '../../utills/hasEmailInDataBase.ts';
import { useNavigate } from '@tanstack/react-router';
import CheckIcon from '@mui/icons-material/Check';
import { generateRandomNumber } from '../../utills/generateRandomNumber.ts';

export const Register = () => {
  const firstNameInput = useInput('');
  const lastNameInput = useInput('');
  const emailNameInput = useInput('');
  const passwordNameInput = useInput('');
  const passwordNameInput2 = useInput('');
  const [diffrentPassword, setDiffrentPassword] = useState(false);
  const [emailInDataBase, setEmailInDataBase] = useState(false);

  const { mutate, isSuccess } = useCreateUserMutation();
  const { data } = useSuspenseQuery(usersOptions);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(diffrentPassword);
  }, [diffrentPassword]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Password:', passwordNameInput.value);
    console.log('Repeat password:', passwordNameInput2.value);

    if (passwordNameInput.value !== passwordNameInput2.value) {
      setDiffrentPassword(true);
    } else {
      setDiffrentPassword(false);

      if (hasEmailInDataBase(data, emailNameInput.value)) {
        setEmailInDataBase(true);
      } else {
        const formData: UserDto = {
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          email: emailNameInput.value,
          password: passwordNameInput.value,
          role: 'client',
          libraryCardCode: generateRandomNumber(),
        };
        mutate(formData);
      }
    }
  };

  useEffect(() => {
    if (!isSuccess) return;
    setTimeout(() => {
      navigate({ to: '/login' });
    }, 2000);
  }, [isSuccess, navigate]);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#adaaaa',
        padding: '2rem',
      }}
    >
      <Box
        component="form"
        sx={{
          width: '100%',
          maxWidth: '500px',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid black',
          backgroundColor: 'white',
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: '1.5rem' }}>
          Rejestracja
        </Typography>
        <TextField
          required
          inputProps={{ 'data-testid': 'first-name-input' }}
          id="firstName"
          label="Imię"
          variant="outlined"
          {...firstNameInput}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          required
          inputProps={{ 'data-testid': 'last-name-input' }}
          id="lastName"
          label="Nazwisko"
          variant="outlined"
          {...lastNameInput}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          required
          inputProps={{ 'data-testid': 'email-input' }}
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          error={emailInDataBase}
          helperText={
            emailInDataBase
              ? 'Już istnieje użytkownik z takim adresem e-mail.'
              : ''
          }
          {...emailNameInput}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          required
          inputProps={{ 'data-testid': 'password-input' }}
          id="password"
          label="Hasło"
          type="password"
          variant="outlined"
          {...passwordNameInput}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          required
          inputProps={{ 'data-testid': 'repeat-password-input' }}
          id="password2"
          label="Powtórz Hasło"
          type="password"
          variant="outlined"
          error={diffrentPassword}
          helperText={
            diffrentPassword ? (
              <span id="repeat-password-error">Hasło nie jest identyczne</span>
            ) : (
              ''
            )
          }
          {...passwordNameInput2}
          sx={{ marginBottom: '1.5rem' }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          data-testid="register-button2"
          sx={{
            marginBottom: '1rem',
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
          }}
        >
          Załóż konto
        </Button>
        {isSuccess && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            data-testid="success-message"
            severity="success"
            sx={{
              marginTop: '1rem',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Konto zostało założone
          </Alert>
        )}
      </Box>
    </Container>
  );
};
