import { useMutation } from '@tanstack/react-query';
import { apiCall } from '../utills/apiCall';
import { Message, MessageDto } from '../types';

export const useCreateMessageMutation = () => {
  return useMutation({
    mutationKey: ['new-message'],
    mutationFn: async (body: MessageDto) => {
      return await apiCall<Message, MessageDto>('messages', {
        method: 'POST',
        body,
      });
    },
  });
};
