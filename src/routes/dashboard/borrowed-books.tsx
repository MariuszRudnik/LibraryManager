import { createFileRoute } from '@tanstack/react-router';
import { BorrowedBooks } from '../../pages/BorrowedBooks/BorrowedBooks';

export const Route = createFileRoute('/dashboard/borrowed-books')({
  component: BorrowedBooks,
});
