import { createFileRoute, redirect } from '@tanstack/react-router';
import { Profil } from '../pages/profil/Profil';
import { getUserFromLocalStorage } from '../utills/getUserFromLocalStorage';

export const Route = createFileRoute('/profil')({
  beforeLoad: () => {
    const user = getUserFromLocalStorage();
    if (user?.role !== 'client' && user?.role !== 'admin') {
      throw redirect({
        to: '/',
      });
    }
  },
  component: Profil,
});
