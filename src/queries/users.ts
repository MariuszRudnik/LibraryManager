import { queryOptions } from '@tanstack/react-query';
import { User } from '../types';
import { apiCall } from '../utills/apiCall';

export const usersOptions = queryOptions({
  queryKey: ['users'],
  queryFn: async () => {
    return apiCall<User[]>('users');
  },
});
