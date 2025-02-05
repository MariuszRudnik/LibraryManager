import { Grid, Paper } from '@mui/material';
import styles from '../../styles.module.scss';

export type SmallCounterCardProps = {
  count: number;
  title: string;
  icon: React.ReactNode;
};

export const SmallCounterCard = ({
  title,
  count,
  icon,
}: SmallCounterCardProps) => {
  return (
    <Grid item xs="auto">
      <Paper
        sx={{
          p: 2,
          height: '85px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
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
