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
import { formatStaticRentalBooks } from '../../../../utills/FormatStaticRentalBooks';

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

  //dodać pobieranie tytułu książki

  return (
    <Grid item xs sx={{ flexGrow: 1 }}>
      <Paper sx={{ height: '100%' }}>
        <Typography variant="h5" padding={1} gutterBottom textAlign="center">
          Historia wypożyczeń
        </Typography>
        {returnedBooks.map(({ id, returnDate }, index) => (
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
                {/* {title} */}
                kot
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Data zwrotu:{' '}
                {returnDate ? formatDate(returnDate) : 'Brak daty zwrotu'}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Grid>
  );
};
