import { createFileRoute } from '@tanstack/react-router';
import { UserSettings } from '../../pages/profil/userSettings/UserSettings';

export const Route = createFileRoute('/profil/userSettings')({
  component: UserSettings,
});
