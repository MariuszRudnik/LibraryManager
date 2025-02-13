import { queryOptions } from '@tanstack/react-query';
import { User } from '../types';
import { apiCall } from '../utills/apiCall';

export const userOptions = (id: string) =>
  queryOptions({
    queryKey: ['user', id],
    queryFn: async () => {
      return await apiCall<User>(`users/${id}`);
    },
  });
