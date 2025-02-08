import { Chart } from 'react-google-charts';
import { Grid, Paper } from '@mui/material';

export type BarChartProps = {
  data: (string | number)[][];
};

const options = {
  chart: {
    title: 'Ilość wypożyczonych książek',
    subtitle: 'w poszczególnych miesiącach',
  },
};

export const BarChart = ({ data }: BarChartProps) => {
  return (
    <Grid item xs sx={{ flexGrow: 1 }}>
      <Paper sx={{ p: 2, height: '100%' }}>
        <Chart
          // Note the usage of Bar and not BarChart for the material version
          chartType="Bar"
          width="100%"
          height="600px"
          data={data}
          options={options}
        />
      </Paper>
    </Grid>
  );
};
