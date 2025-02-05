import { RentalBook } from '../types';

export const formatStaticRentalBooks = (data: RentalBook[]) => {
  const borrowedBooks = data.filter(
    (book) => book.status === 'borrowed'
  ).length;

  const returnedBooks = data.filter((book) => book.status === 'returned');

  const booksThisMonth = data.filter((book) => {
    const borrowDate = new Date(book.borrowDate);
    const currentDate = new Date();
    return (
      borrowDate.getMonth() === currentDate.getMonth() &&
      borrowDate.getFullYear() === currentDate.getFullYear()
    );
  }).length;

  const BooksReturnedOnTime = data.filter((book) => {
    if (book.status !== 'returned') return false;

    const borrowDate = new Date(book.borrowDate);
    const returnDate = new Date(book.returnDate || '');

    const borrowPlusFourteenDays = new Date(borrowDate);
    borrowPlusFourteenDays.setDate(borrowDate.getDate() + 14);

    return returnDate <= borrowPlusFourteenDays;
  }).length;

  const BooksReturnedLate = data.filter((book) => {
    if (book.status !== 'returned') return false;

    const borrowDate = new Date(book.borrowDate);
    const returnDate = new Date(book.returnDate || '');

    const borrowPlusFourteenDays = new Date(borrowDate);
    borrowPlusFourteenDays.setDate(borrowDate.getDate() + 14);

    return returnDate > borrowPlusFourteenDays;
  }).length;

  const getMonthlyRentalStats = (): (string | number)[][] => {
    const months = [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień',
    ];

    // Inicjalizacja liczników dla każdego miesiąca
    const stats: Record<string, number> = months.reduce(
      (acc, month) => {
        acc[month] = 0;
        return acc;
      },
      {} as Record<string, number>
    );

    // Iteracja po wypożyczeniach i zliczanie ich według miesiąca
    data.forEach(({ borrowDate }) => {
      const date = new Date(borrowDate);
      const monthName = months[date.getMonth()];
      stats[monthName]++;
    });

    // Konwersja do wymaganej tablicy
    return [
      ['Rok', 'Miesiąc'],
      ...months.map((month) => [month, stats[month]]),
    ];
  };

  return {
    borrowedBooks,
    returnedBooks,
    booksThisMonth,
    BooksReturnedOnTime,
    BooksReturnedLate,
    getMonthlyRentalStats,
  };
};
