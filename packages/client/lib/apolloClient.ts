import { useMemo } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // set to true for SSR
    link: new HttpLink({
      uri: 'http://localhost:4000',
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: NormalizedCacheObject = null) {
  apolloClient ||= createApolloClient();

  if (initialState) {
    const existingCache = apolloClient.extract();
    apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  return apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store: ApolloClient<NormalizedCacheObject> = useMemo(
    () => initializeApollo(initialState),
    [initialState],
  );
  return store;
}
