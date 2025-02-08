import { Button, Paper, Typography } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import styles from './styles.module.scss';
import { red } from '@mui/material/colors';

export const UserSettings = () => {
  return (
    <div className={styles.container}>
      <Paper
        elevation={24}
        sx={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Typography variant="h5">Usuń konto użytkownika</Typography>
        <Typography variant="h6">
          Nie masz aktualnie wypożyczonych książek
        </Typography>
        <Button
          variant="contained"
          disabled
          sx={{ alignSelf: 'flex-end' }}
          startIcon={<ReportIcon sx={{ color: red[500] }} />}
        >
          Usuń konto
        </Button>
      </Paper>
    </div>
  );
};
