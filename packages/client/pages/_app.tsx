import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import 'regenerator-runtime/runtime';
import SuperTokens from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';
import Navbar from '../components/Navbar';
import { useApollo } from '../lib/apolloClient';

const websitePort = process.env.ST_URL || process.env.APP_PORT || 3000;
const websiteUrl =
  process.env.ST_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  `http://localhost:${websitePort}`;

if (typeof window !== 'undefined') {
  SuperTokens.init({
    appInfo: {
      appName: 'Gimme Cheats', // Example: "SuperTokens Demo App"
      apiDomain: websiteUrl,
      websiteDomain: websiteUrl,
      apiBasePath: 'api/auth',
    },
    recipeList: [EmailPassword.init(), Session.init()],
  });
}

// signUpFeature: {
//   signUpForm: {
//     formFields: [
//       {
//         id: 'username',
//         label: 'Username',
//         placeholder: 'Pick your username',
// validate: async (value: string) => {
//   const isValid = RegExp(
//     /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/,
//   ).test(value);
//   console.log({value})
//   return isValid ? undefined : 'Wrong format of username';
// },
//       },
//     ],
//   },
// },

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
