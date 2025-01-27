import { useLocation } from '@tanstack/react-router';

export const useIsActiveLink = (path: string) => {
  const location = useLocation();
  return location.pathname === path;
};
