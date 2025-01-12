type ApiConfig<P> = {
  method?: 'GET' | 'POST' | 'DELETE';
  body?: P;
};

export const apiCall = async <R, P = object>(
  url: string,
  config?: ApiConfig<P>
) => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const response = await fetch(`${BASE_URL}/${url}`, {
    method: config?.method || 'GET',
    body: config?.body ? JSON.stringify(config.body) : undefined,
  });
  return response.json() as Promise<R>;
};
