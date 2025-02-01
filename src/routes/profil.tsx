import { createFileRoute } from '@tanstack/react-router';
import { Profil } from '../pages/profil/Profil';

export const Route = createFileRoute('/profil')({
  component: Profil,
});
