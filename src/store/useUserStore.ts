import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

type UserStore = {
  user: User;
  isLoggedIn: boolean;
  login: (newUser: User) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
        libraryCardCode: '',
      },
      isLoggedIn: false,
      login: (newUser) =>
        set({
          isLoggedIn: true,
          user: newUser,
        }),
      logout: () =>
        set({
          isLoggedIn: false,
          user: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: '',
            libraryCardCode: '',
          },
        }),
    }),
    {
      name: 'user-store',
    }
  )
);
