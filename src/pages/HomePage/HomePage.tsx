import BookList from './BookList';
import { useSuspenseQuery } from '@tanstack/react-query';
import { booksQuery } from '../../routes/-loader/booksLoader.tsx';

function HomePage() {
  const { data: books } = useSuspenseQuery(booksQuery());

  return (
    <div style={{ minHeight: '100vh' }}>
      <BookList books={books} />
    </div>
  );
}

export default HomePage;
