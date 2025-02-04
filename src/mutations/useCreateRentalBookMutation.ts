import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiCall } from '../utills/apiCall';
import { RentalBook, RentalBookDto } from '../types';

export const useCreateRentalBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['rental-book'],
    mutationFn: async (body: RentalBookDto) => {
      return await apiCall<RentalBook, RentalBookDto>('rentals', {
        method: 'POST',
        body,
      });
    },
    onSuccess: (body) => {
      queryClient.invalidateQueries({
        queryKey: ['rentalBook', body.userId],
        exact: true,
      });
      queryClient.invalidateQueries({
        queryKey: ['book', body.bookId],
        exact: true,
      });
    },
  });
};
