import { createFileRoute } from '@tanstack/react-router';
// import { UserStatistics } from '../../pages/profil/userStatistics/UserStatistics';
import { UserStatistics } from '../../pages/profil/userStatistics/UserStatistics';

export const Route = createFileRoute('/profil/userStatistics')({
  component: UserStatistics,
});
