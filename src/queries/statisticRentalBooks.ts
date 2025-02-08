import { queryOptions } from '@tanstack/react-query';
import { RentalBook } from '../types';
import { apiCall } from '../utills/apiCall';

export const statisticRentalBooksOptions = (id: string) =>
  queryOptions({
    queryKey: ['statisticRentalBook', id],
    queryFn: async () => {
      return apiCall<RentalBook[]>(`rentals?userId=${id}`);
    },
  });
