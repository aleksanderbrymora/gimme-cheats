import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import Navbar from '../components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
