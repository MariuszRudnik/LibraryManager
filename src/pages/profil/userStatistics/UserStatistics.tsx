import { Box, Grid, Paper } from '@mui/material';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import { SmallCounterCard } from './component/SmallCounterCard';
import { BiggerCounterCard } from './component/BiggerCounterCard';

export const UserStatistics = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2, height: 'calc(100vh - 100px)' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        {/* Lewa strona */}
        <Grid item xs={8} sx={{ height: '100%' }}>
          <Grid
            container
            spacing={2}
            sx={{ height: '100%', flexDirection: 'column' }}
          >
            {/* Górna część - dwa okna obok siebie */}
            <Grid item xs="auto">
              <Grid container spacing={2}>
                <BiggerCounterCard
                  title="Książeki wypożyczonne w tym miesiącu"
                  count={6}
                  icon={<CalendarMonthOutlinedIcon />}
                />
                <BiggerCounterCard
                  title="Aktualnie wypożyczone książki"
                  count={8}
                  icon={<CollectionsBookmarkOutlinedIcon />}
                />
              </Grid>
            </Grid>

            {/* Dolna część - duże okno */}
            <Grid item xs sx={{ flexGrow: 1 }}>
              <Paper sx={{ p: 2, height: '100%' }}>
                Duże okno na dole po lewej
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Prawa strona */}
        <Grid item xs={4} sx={{ height: '100%' }}>
          <Grid
            container
            spacing={2}
            sx={{ height: '100%', flexDirection: 'column' }}
          >
            <SmallCounterCard
              title="Ilość książek oddanych w terminie"
              count={5}
              icon={<AssignmentTurnedInOutlinedIcon />}
            />
            <SmallCounterCard
              title="Ilość książek oddanych po terminie"
              count={5}
              icon={<AssignmentLateOutlinedIcon />}
            />

            <Grid item xs sx={{ flexGrow: 1 }}>
              <Paper sx={{ p: 2, height: '100%' }}>
                Pionowe okno na dole po prawej
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
