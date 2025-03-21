type Type = {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  header?: string;
  body?: unknown;
};

export const utilFetch = async (params: Type) => {
  const { path, method, body } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/${process.env.NEXT_PUBLIC_API_PREFIX}${path}`,
    {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : null,
    },
  );

  return await res.json();
};

export default utilFetch;
