import { queryOptions } from '@tanstack/react-query';
import { RentalBook } from '../types';
import { apiCall } from '../utills/apiCall';

export const borrowedBooksOptions = queryOptions({
  queryKey: ['BorrowedBooks'],
  queryFn: async () => {
    return await apiCall<RentalBook[]>('rentals?status=borrowed');
  },
});
