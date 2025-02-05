import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { brown } from '@mui/material/colors';
import { RentalBook } from '../../../../types';
import { formatDate } from '../../../../utills/formatData';
import { formatStaticRentalBooks } from '../../../../utills/formatStaticRentalBooks';
import { booksOptions } from '../../../../queries/books';
import { useSuspenseQuery } from '@tanstack/react-query';

export type HistoryCardBookProps = {
  history: RentalBook[];
};

export const HistoryCardBook = ({ history }: HistoryCardBookProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const { returnedBooks } = formatStaticRentalBooks(history);
  const { data } = useSuspenseQuery(booksOptions);

  const bookTitles = [...returnedBooks].reverse().map((rentedBook) => {
    const book = data.find((book) => book.id === rentedBook.bookId);
    return {
      ...rentedBook,
      title: book?.title || 'Nieznany tytuł',
    };
  });

  return (
    <Grid item xs sx={{ flexGrow: 1 }}>
      <Paper sx={{ height: '100%', maxHeight: 610, overflowY: 'auto' }}>
        <Typography variant="h5" padding={1} gutterBottom textAlign="center">
          Historia wypożyczeń
        </Typography>
        {bookTitles.map(({ id, returnDate, title }, index) => (
          <Accordion
            sx={{
              backgroundColor: index % 2 === 0 ? brown[300] : brown[200],
              '& .MuiAccordionSummary-content': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            }}
            key={id}
            expanded={expanded === id}
            onChange={handleChange(id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                component="span"
                sx={{
                  width: '100%',
                  flexShrink: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Data zwrotu:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {returnDate ? formatDate(returnDate) : 'Brak daty zwrotu'}
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Grid>
  );
};
