import { Grid, Paper } from '@mui/material';
import styles from '../../styles.module.scss';

export type BiggerCounterCardProps = {
  title: string;
  count: number;
  icon: JSX.Element;
};

export const BiggerCounterCard = ({
  title,
  count,
  icon,
}: BiggerCounterCardProps) => {
  return (
    <Grid item xs={6}>
      <Paper sx={{ p: 2, height: '180px' }}>
        <div className={styles.biggerCounterCard}>
          {icon}
          <span>{count}</span>
          <span>{title}</span>
        </div>
      </Paper>
    </Grid>
  );
};
