import { Grid, Paper } from '@mui/material';
import styles from '../../styles.module.scss';
import { brown, green, red } from '@mui/material/colors';

export type SmallCounterCardProps = {
  count: number;
  title: string;
  icon: React.ReactNode;
  variant?: 'green' | 'red';
};

export const SmallCounterCard = ({
  title,
  count,
  icon,
  variant = 'green',
}: SmallCounterCardProps) => {
  const backgrounds = {
    green: `linear-gradient(90deg, ${green[400]}, ${brown[600]})`,
    red: `linear-gradient(90deg, ${red[400]}, ${brown[600]})`,
  };

  return (
    <Grid item xs="auto">
      <Paper
        sx={{
          p: 2,
          height: '85px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          backgroundImage: backgrounds[variant],
          '& > svg': {
            fontSize: '2rem',
          },
        }}
      >
        {icon}
        <div className={styles.smallCounterCard}>
          <span>{count}</span>
          <span>{title}</span>
        </div>
      </Paper>
    </Grid>
  );
};
