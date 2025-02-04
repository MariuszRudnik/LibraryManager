import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiCall } from '../utills/apiCall';
import { RentalBook } from '../types';

export const useEditRentalBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['rental-book-edit'],
    mutationFn: async (body: RentalBook) => {
      return await apiCall<RentalBook>(`rentals/${body.id}`, {
        method: 'PUT',
        body,
      });
    },
    onSuccess: (body) => {
      queryClient.invalidateQueries({
        queryKey: ['rentalBook', body.userId],
        exact: true,
      });
    },
  });
};
