import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import Navbar from '../components/Navbar';

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
