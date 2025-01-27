import { Button } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';

export const InfoLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        data-testid="register-button"
        color="inherit"
        onClick={() => navigate({ to: '/register' })}
      >
        Rejestracja
      </Button>

      <Button color="inherit" onClick={() => navigate({ to: '/login' })}>
        Zaloguj się
      </Button>
    </>
  );
};
