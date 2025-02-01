import { queryOptions } from '@tanstack/react-query';
import { RentalBook } from '../types';
import { apiCall } from '../utills/apiCall';

export const rentalBooksOptions = (id: string) =>
  queryOptions({
    queryKey: ['rentalBook', id],
    queryFn: async () => {
      return apiCall<RentalBook[]>(`rentals?userId=${id}`);
    },
  });
