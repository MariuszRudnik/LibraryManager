import { createFileRoute } from '@tanstack/react-router';
// import { UserStatistics } from '../../pages/profil/userStatistics/UserStatistics';
import { UserStatisticsCopy } from '../../pages/profil/userStatistics/UserStatisticsCopy';

export const Route = createFileRoute('/profil/userStatistics')({
  component: UserStatisticsCopy,
});
