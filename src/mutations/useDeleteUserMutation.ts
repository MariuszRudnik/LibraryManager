import { useMutation } from '@tanstack/react-query';
import { apiCall } from '../utills/apiCall';
import { User } from '../types';

export const useDeleteUserMutation = () => {
  return useMutation({
    mutationKey: ['delete-user'],
    mutationFn: async (body: User) => {
      const deletedUser: User = {
        ...body,
        role: 'DELETED',
      };
      return await apiCall(`users/${body.id}`, {
        method: 'PUT',
        body: deletedUser,
      });
    },
  });
};
