import { queryOptions } from '@tanstack/react-query';
import { Message } from '../types';
import { apiCall } from '../utills/apiCall';

export const messagesOptions = (userId: string) =>
  queryOptions({
    queryKey: ['message', userId],
    queryFn: async () => {
      return await apiCall<Message[]>(`messages?userId=${userId}`);
    },
  });
