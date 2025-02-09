import { queryOptions } from '@tanstack/react-query';
import { User } from '../types';
import { apiCall } from '../utills/apiCall';

interface LoginCredentials {
  email: string;
  password: string;
}

export const loginOptions = (credentials: LoginCredentials) =>
  queryOptions({
    queryKey: ['login-user'],
    queryFn: async () => {
      try {
        const users = await apiCall<User[]>(
          `users?email=${credentials.email}&password=${credentials.password}`
        );

        if (!users || users.length === 0 || users[0].role === 'DELETED') {
          throw new Error('Nieprawidłowy login lub hasło');
        }

        return users[0];
      } catch (error) {
        throw new Error(`Login failed ${error}`);
      }
    },
  });
