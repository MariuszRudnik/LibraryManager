import { Box, Grid, Paper } from '@mui/material';

export const UserStatisticsCopy = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2, height: 'calc(100vh - 120px)' }}>
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
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, height: '180px' }}>
                    Lewe górne okno 1
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, height: '180px' }}>
                    Lewe górne okno 2
                  </Paper>
                </Grid>
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
            {/* Górne dwa okna pionowo */}
            <Grid item xs="auto">
              <Paper sx={{ p: 2, height: '85px' }}>Prawe górne okno 1</Paper>
            </Grid>
            <Grid item xs="auto">
              <Paper sx={{ p: 2, height: '85px' }}>Prawe górne okno 2</Paper>
            </Grid>
            {/* Dolne pionowe okno */}
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
