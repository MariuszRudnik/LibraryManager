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
        const user = users.filter((user) => user.role !== 'DELETED');

        if (!user || user.length === 0) {
          throw new Error('Nieprawidłowy login lub hasło');
        }

        return user[0];
      } catch (error) {
        throw new Error(`Login failed ${error}`);
      }
    },
  });
