import { useQuery } from '@tanstack/react-query';
import { useInput } from '../../hooks/useInput.ts';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Collapse,
  Container,
  TextField,
  Typography,
} from '@mui/material';

import { useEffect, useState } from 'react';

import { useNavigate } from '@tanstack/react-router';
import { LogDto } from '../../types/index.ts';
import { useUserStore } from '../../store/useUserStore.ts';
import { AdminInfo } from './AdminInfo.tsx';
import { loginOptions } from '../../queries/login.ts';
import { useCreateLogMutation } from '../../mutations/useCreateLogMutation.ts';

export const Login = () => {
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const [error, setError] = useState(false);
  const { mutate } = useCreateLogMutation();
  const navigate = useNavigate();
  const { login } = useUserStore();

  const { isFetching, isSuccess, refetch } = useQuery({
    ...loginOptions({
      email: emailInput.value,
      password: passwordInput.value,
    }),
    enabled: false,
    staleTime: Infinity,
    retry: false,
    gcTime: 0,
    refetchOnWindowFocus: false,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(false);

    try {
      const { data: user } = await refetch();

      if (!user) {
        setError(true);
        return;
      }

      const logData: LogDto = {
        userId: user.id,
        action: 'login',
        timestamp: new Date().toISOString(),
      };

      login(user);
      mutate(logData);
    } catch (error) {
      console.error('Błąd podczas logowania:', error);
      setError(true);
    }
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
          inputProps={{ 'data-testid': 'email-input' }}
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          {...emailInput}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          required
          inputProps={{ 'data-testid': 'password-input' }}
          id="password"
          label="Hasło"
          type="password"
          variant="outlined"
          {...passwordInput}
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
          {isFetching ? (
            <CircularProgress color="secondary" size="1.8rem" />
          ) : (
            'Zaloguj się'
          )}
        </Button>

        {/* {error && ( */}
        <Collapse in={error} unmountOnExit timeout={500}>
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
        </Collapse>
        {/* )} */}
      </Box>
      <AdminInfo />
    </Container>
  );
};
