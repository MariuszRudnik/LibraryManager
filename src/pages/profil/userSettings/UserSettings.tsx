import { Button, Paper, Typography } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import styles from './styles.module.scss';
import { brown, red } from '@mui/material/colors';
import { useSuspenseQuery } from '@tanstack/react-query';
import { rentalBooksOptions } from '../../../queries/rentalBooks';
import { useUserStore } from '../../../store/useUserStore';
import Swal from 'sweetalert2';
import { useNavigate } from '@tanstack/react-router';
import { useDeleteUserMutation } from '../../../mutations/useDeleteUserMutation';

export const UserSettings = () => {
  const { user, logout } = useUserStore();
  const { data } = useSuspenseQuery(rentalBooksOptions(user.id));
  const natigate = useNavigate();
  const { mutate: deleteUser } = useDeleteUserMutation();

  const getBookWord = (count: number): string => {
    if (count === 1) return `${count} książkę`;
    if (count >= 2 && count <= 4) return `${count} książki`;
    return 'książek';
  };

  const handleDeleteUser = () => {
    if (data.length) {
      Swal.fire({
        title: 'O nie! Nie możesz jeszcze usunąć konta',
        html: `
    najpierw zwróć wszystkie wypożyczone książki. <br />
    Masz obecnie  ${getBookWord(data.length)} do zwrotu.
  `,
        icon: 'warning',
        confirmButtonColor: brown[800],
        confirmButtonText: 'Dobrze tak zrobię',
      });
    } else {
      Swal.fire({
        title: 'Czy na pewno chcesz usunąć konto?',
        text: 'Nie będziesz mógł odzyskać swoich danych!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: red[800],
        cancelButtonColor: brown[800],
        cancelButtonText: 'Nie, zostaw konto!',
        confirmButtonText: 'Tak, usuń konto!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Konto usunięte!',
            text: 'Twoje konto zostało usunięte.',
            icon: 'success',
          });
          logout();
          deleteUser(user);
          natigate({ to: '/' });
        }
      });
    }
  };

  return (
    <div className={styles.container}>
      <Paper
        elevation={24}
        sx={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Typography variant="h4">Usuń konto użytkownika</Typography>
        <Typography>
          Usunięcie konta spowoduje trwałe usunięcie wszystkich danych
          związanych z kontem.
        </Typography>
        <Button
          variant="contained"
          sx={{ alignSelf: 'flex-end' }}
          endIcon={<ReportIcon sx={{ color: red[800] }} />}
          onClick={handleDeleteUser}
        >
          Usuń konto
        </Button>
      </Paper>
    </div>
  );
};
