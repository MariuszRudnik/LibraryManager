import { createFileRoute } from '@tanstack/react-router';
import HomePage from '../pages/HomePage/HomePage.tsx';
import { booksQuery } from './-loader/booksLoader.tsx';

export const Route = createFileRoute('/')({
  loader: async (data) => {
    const { queryClient } = data.context;
    return queryClient.ensureQueryData(booksQuery());
  },
  component: HomePage,
});
