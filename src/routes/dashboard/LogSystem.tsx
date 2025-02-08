import { createFileRoute } from '@tanstack/react-router';
import { AdminLogs } from '../../pages/AdminLogs/AdminLogs';
import { logs } from '../../queries/logs';

export const Route = createFileRoute('/dashboard/LogSystem')({
  component: AdminLogs,
  loader: async (data) => {
    const { queryClient } = data.context;
    return queryClient.ensureQueryData(logs);
  },
});
