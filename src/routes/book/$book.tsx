import { createFileRoute } from '@tanstack/react-router';
import { bookQuery } from './-loader/booksLooader.tsx';
import Books from '../../pages/Book/Book.tsx';

export const Route = createFileRoute('/book/$book')({
  loader: (data) => {
    const { queryClient } = data.context;
    return queryClient.ensureQueryData(bookQuery(data.params.book));
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { book } = Route.useParams();
  return (
    <div>
      <Books book={book} />
    </div>
  );
}
