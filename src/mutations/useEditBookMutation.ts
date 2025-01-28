import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiCall } from '../utills/apiCall';
import { Book } from '../types';

export const useEditBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['update-book'],
    mutationFn: async (body: Book) => {
      return await apiCall(`books/${body.id}`, {
        method: 'PUT',
        body,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
        exact: true,
      });
    },
  });
};
