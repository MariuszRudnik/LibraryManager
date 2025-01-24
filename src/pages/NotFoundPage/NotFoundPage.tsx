import { Link, useLocation } from "@tanstack/react-router";

export const NotFoundPage = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/");
  const lastPath = segments[segments.length - 1];

  return (
    <div>
      <h1>Strona nie została znaleziona</h1>
      <p>Przepraszamy, w Dashboard nie znaleziono podstrony, {lastPath}</p>
      <Link to="/">Wróć na stronę główną</Link>
    </div>
  );
};
