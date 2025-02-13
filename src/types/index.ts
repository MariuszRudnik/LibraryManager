export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'client' | 'admin' | 'DELETED';
  libraryCardCode: string;
};
export type UserDto = Omit<User, 'id'>;

export type Log = {
  id: string;
  timestamp: string;
  userId: string;
  action: string;
};
export type LogDto = Omit<Log, 'id'>;

export type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
  availableCopies: number;
  borrowedCopies: number;
  images: string;
  description: string;
};
export type BookDto = Omit<Book, 'id'>;

export type RentalBook = {
  id: string;
  userId: string;
  bookId: string;
  borrowDate: string;
  returnDate: null | string;
  status: string;
};
export type RentalBookDto = Omit<RentalBook, 'id'>;

export type Message = {
  id: string;
  userId: string;
  bookId: string;
  message: string;
};
export type MessageDto = Omit<Message, 'id'>;
