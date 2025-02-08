import { Box, Grid } from '@mui/material';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import { SmallCounterCard } from './component/SmallCounterCard';
import { BiggerCounterCard } from './component/BiggerCounterCard';
import { HistoryCardBook } from './component/HistoryCardBook';
import { useUserStore } from '../../../store/useUserStore';
import { useSuspenseQuery } from '@tanstack/react-query';
import { statisticRentalBooksOptions } from '../../../queries/statisticRentalBooks';
import { formatStaticRentalBooks } from '../../../utills/formatStaticRentalBooks';
import { BarChart } from './component/BarChart';

export const UserStatistics = () => {
  const {
    user: { id },
  } = useUserStore();
  const { data } = useSuspenseQuery(statisticRentalBooksOptions(id));

  const {
    booksThisMonth,
    borrowedBooks,
    BooksReturnedOnTime,
    BooksReturnedLate,
    getMonthlyRentalStats,
  } = formatStaticRentalBooks(data);

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
                  count={booksThisMonth}
                  icon={<CalendarMonthOutlinedIcon />}
                />
                <BiggerCounterCard
                  title="Aktualnie wypożyczone książki"
                  count={borrowedBooks}
                  icon={<CollectionsBookmarkOutlinedIcon />}
                  variant="yellow"
                />
              </Grid>
            </Grid>

            <BarChart data={getMonthlyRentalStats()} />
          </Grid>
        </Grid>

        {/* Prawa strona */}
        <Grid item xs={4} sx={{ height: '100%', overflowY: 'auto' }}>
          <Grid
            container
            spacing={2}
            sx={{ height: '100%', flexDirection: 'column' }}
          >
            <SmallCounterCard
              title="Ilość książek oddanych w terminie"
              count={BooksReturnedOnTime}
              icon={<AssignmentTurnedInOutlinedIcon />}
            />
            <SmallCounterCard
              title="Ilość książek oddanych po terminie"
              count={BooksReturnedLate}
              icon={<AssignmentLateOutlinedIcon />}
              variant="red"
            />

            <HistoryCardBook history={data} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
