import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiCall } from '../utills/apiCall';

export const useDeleteMessageMutation = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['delete-message'],
    mutationFn: async (id: string) => {
      return await apiCall(`messages/${id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['message', userId],
        exact: true,
      });
    },
  });
};
