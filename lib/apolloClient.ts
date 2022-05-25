import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  credentials: 'include',
});

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  cache: new InMemoryCache(),
  link,
  connectToDevTools: true,
});
