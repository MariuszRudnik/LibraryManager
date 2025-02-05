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

  return {
    borrowedBooks,
    returnedBooks,
    booksThisMonth,
    BooksReturnedOnTime,
    BooksReturnedLate,
  };
};
