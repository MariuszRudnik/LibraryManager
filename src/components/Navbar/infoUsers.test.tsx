import { describe, it, expect } from 'vitest';
import { act } from '@testing-library/react';
import { useUserStore } from '../../store/useUserStore';

describe('useUserStore', () => {
  it('should initialize with default values', () => {
    const { user, isLoggedIn } = useUserStore.getState();
    expect(isLoggedIn).toBe(false);
    expect(user).toEqual({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: '',
      libraryCardCode: '',
    });
  });

  it('should log in a user', () => {
    const newUser = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'securepassword',
      role: 'client',
      libraryCardCode: '123456',
    };

    act(() => {
      useUserStore.getState().login(newUser);
    });

    const { user, isLoggedIn } = useUserStore.getState();
    expect(isLoggedIn).toBe(true);
    expect(user).toEqual(newUser);
  });

  it('should log out a user', () => {
    act(() => {
      useUserStore.getState().logout();
    });

    const { user, isLoggedIn } = useUserStore.getState();
    expect(isLoggedIn).toBe(false);
    expect(user).toEqual({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: '',
      libraryCardCode: '',
    });
  });
});
