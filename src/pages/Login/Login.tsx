import { useSuspenseQuery } from '@tanstack/react-query';
import { useInput } from '../../hooks/useInput.ts';
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { usersOptions } from '../../queries/users.ts';
import { hasEmailAndPasswordInDataBase } from '../../utills/hasEmailAndPassworsInDataBase.ts';
import { useEffect, useState } from 'react';
import { useCreateLogMutation } from '../../mutations/useCreateLogMutation.ts';
import { useNavigate } from '@tanstack/react-router';
import { LogDto } from '../../types/index.ts';
import { useUserStore } from '../../store/useUserStore.ts';
import { AdminInfo } from './Admininfo.tsx';

export const Login = () => {
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const [error, setError] = useState(false);

  const { data } = useSuspenseQuery(usersOptions);
  const { mutate, isSuccess } = useCreateLogMutation();
  const navigate = useNavigate();
  const { login } = useUserStore();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const user = hasEmailAndPasswordInDataBase(
      data,
      emailInput.value,
      passwordInput.value
    );
    if (user === null) return setError(true);

    const logData: LogDto = {
      userId: user.id,
      action: 'login',
      timestamp: new Date().toISOString(),
    };

    login(user); // zapisuje info user w store
    mutate(logData); //zapisuje w db.json info o logowaniu
  };

  useEffect(() => {
    if (!isSuccess) return;
    navigate({ to: '/' });
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
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid black',
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: '1.5rem' }}>
          Miło cię widzieć
        </Typography>
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          {...emailInput}
          inputProps={{ 'data-testid': 'email-input' }}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          required
          id="password"
          label="Hasło"
          type="password"
          variant="outlined"
          {...passwordInput}
          inputProps={{ 'data-testid': 'password-input' }}
          sx={{ marginBottom: '1.5rem' }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          data-testid="login-button"
          sx={{
            marginBottom: '1rem',
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
          }}
        >
          Zaloguj się
        </Button>

        {error && (
          <Alert
            data-testid="error-message"
            severity="error"
            sx={{
              width: '100%',
              marginTop: '1rem',
              textAlign: 'center',
            }}
          >
            Nieprawidłowy login lub hasło
          </Alert>
        )}
      </Box>
      <AdminInfo />
    </Container>
  );
};
