import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiCall } from '../utills/apiCall';
import { Book, BookDto } from '../types';

export const useCreateBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['new-book'],
    mutationFn: async (body: BookDto) => {
      return await apiCall<Book, BookDto>('books', {
        method: 'POST',
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
