import { useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import Header from 'components/header/header';
import '/styles/globals.css';
import ErrorSnackbar from 'components/error-snackbar';
import { WebshopProps } from 'lib/models';

function NicolasFrontEnd({ Component, pageProps }: AppProps) {

  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // use this interceptor later on
  // axios.defaults.headers.post['Content-Type'] = 'application/json';

  const props: WebshopProps = {
    setErrorOpen,
    setErrorMessage,
  };
  
  return (
    <>
      <Head>
        <title>NC Webshop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Component {...{ ...pageProps, ...props }} />
      <ErrorSnackbar
        message={errorMessage}
        open={errorOpen}
        setOpen={setErrorOpen}
      />
    </>
  );
}

export default NicolasFrontEnd;
