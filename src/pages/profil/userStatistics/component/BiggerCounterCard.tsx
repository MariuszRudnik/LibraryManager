import { Grid, Paper } from '@mui/material';
import styles from '../../styles.module.scss';
import { blue, brown, yellow } from '@mui/material/colors';

export type BiggerCounterCardProps = {
  title: string;
  count: number;
  icon: JSX.Element;
  variant?: 'blue' | 'yellow';
};

export const BiggerCounterCard = ({
  title,
  count,
  icon,
  variant = 'blue',
}: BiggerCounterCardProps) => {
  const backgrounds = {
    blue: `linear-gradient(${brown[600]}, ${blue[600]})`,
    yellow: `linear-gradient(  ${brown[600]}, ${yellow[400]})`,
  };
  return (
    <Grid item xs={6}>
      <Paper
        sx={{ p: 2, height: '180px', backgroundImage: backgrounds[variant] }}
      >
        <div className={styles.biggerCounterCard}>
          {icon}
          <span>{count}</span>
          <span>{title}</span>
        </div>
      </Paper>
    </Grid>
  );
};
