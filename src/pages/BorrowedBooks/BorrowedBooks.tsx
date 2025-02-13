import { useSuspenseQuery } from '@tanstack/react-query';
import { borrowedBooksOptions } from '../../queries/borrowedBooks';
import { AdminSingleBorrowedBook } from './AdminSingleBorrowedBook';

export const BorrowedBooks = () => {
  const { data } = useSuspenseQuery(borrowedBooksOptions);

  return (
    <div>
      <h1>Wszystkie wypożyczone książki</h1>
      {data.map((rentalBook) => (
        <AdminSingleBorrowedBook rentalBook={rentalBook} key={rentalBook.id} />
      ))}
    </div>
  );
};
