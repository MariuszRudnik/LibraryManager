import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import { Button, Chip } from '@mui/material';
import { brown } from '@mui/material/colors';

export default function SingleBorrowedBook() {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        sx={{ width: 120 }}
        image="https://bonito.pl/cache/3/a836c40ae86d8d4a58c3af39a6b_800.webp"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            Mac Miller
          </Typography>
        </CardContent>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}
        >
          <Typography variant="h5" component="div">
            Termin zwrotu
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            Za 5 dni
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" component="div">
            Data Wypożyczenia
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            2021-10-10
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
          }}
        >
          <Typography variant="h5" component="div">
            Status
          </Typography>

          <Chip
            variant="outlined"
            color="success"
            label="Wypożyczona"
            icon={<DoneIcon />}
          />
        </Box>
        <Button sx={{ background: brown[500] }} color="secondary">
          Zwróć książkę
        </Button>
      </Box>
    </Card>
  );
}
