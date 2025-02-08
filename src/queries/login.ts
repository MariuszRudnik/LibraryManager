import { queryOptions } from '@tanstack/react-query';
import { User } from '../types';
import { apiCall } from '../utills/apiCall';

interface LoginCredentials {
  email: string;
  password: string;
}

export const loginOptions = (credentials: LoginCredentials) =>
  queryOptions({
    queryKey: ['login-user', credentials],
    queryFn: async () => {
      const [adminUsers, clientUsers] = await Promise.all([
        apiCall<User[]>(
          `users?email=${credentials.email}&password=${credentials.password}&role=admin`
        ),
        apiCall<User[]>(
          `users?email=${credentials.email}&password=${credentials.password}&role=client`
        ),
      ]);

      const allUsers = [...adminUsers, ...clientUsers];

      if (allUsers.length === 0) {
        throw new Error('User not found');
      }

      return allUsers[0];
    },
  });
