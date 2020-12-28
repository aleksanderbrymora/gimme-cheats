export const gqlAddress = () =>
  process.env.NODE_ENV === 'production'
    ? (process.env.GQL_URL as string)
    : 'http://localhost:4000/graphql';
