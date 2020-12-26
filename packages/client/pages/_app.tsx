import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import 'regenerator-runtime/runtime';
import SuperTokens from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';
import Navbar from '../components/Navbar';
import { useApollo } from '../lib/apolloClient';
import axios from 'axios';

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
    recipeList: [
      EmailPassword.init({
        signInAndUpFeature: {
          signUpForm: {
            formFields: [
              {
                id: 'username',
                label: 'Username',
                placeholder: 'Pick your username',
                validate: async (value: string) => {
                  const isValid = RegExp(
                    /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/,
                  ).test(value);
                  if (!isValid) return `Can't use that format of username`;

                  const isFree = await axios({
                    url: `http://localhost:4000/graphql`,
                    method: 'post',
                    data: {
                      query: `query($username: String!) { isUsernameFree(username: $username) }`,
                      variables: {
                        username: value,
                      },
                    },
                  });

                  console.log(isFree.data.data);

                  if (!isFree.data.data.isUsernameFree) {
                    return 'That username is already taken';
                  }
                  return undefined;
                },
              },
            ],
          },
        },
      } as any),
      Session.init(),
    ],
  });
}

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
