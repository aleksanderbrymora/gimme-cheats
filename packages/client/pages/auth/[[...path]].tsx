import Head from 'next/head';
import React, { useEffect } from 'react';
import 'regenerator-runtime/runtime';
import dynamic, { LoaderComponent } from 'next/dynamic';
import SuperTokens from 'supertokens-auth-react';

const SuperTokensComponentNoSSR = dynamic(
  () =>
    import('supertokens-auth-react').then((mod) => {
      return () => mod.getRoutingComponent() || null;
    }) as LoaderComponent,
  {
    ssr: false,
  },
);

export default function Auth() {
  useEffect(() => {
    if (SuperTokens.canHandleRoute() === false) {
      window.location.href = '/';
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <SuperTokensComponentNoSSR />
      </main>
    </div>
  );
}
