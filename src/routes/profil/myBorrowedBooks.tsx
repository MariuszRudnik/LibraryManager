import { createFileRoute } from '@tanstack/react-router';
import { MyBorrowedBooks } from '../../pages/profil/myBorrowedBooks/MyBorrowedBooks';

export const Route = createFileRoute('/profil/myBorrowedBooks')({
  component: MyBorrowedBooks,
});
