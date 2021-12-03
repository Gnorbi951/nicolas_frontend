import Head from 'next/head';
import type { AppProps } from 'next/app';

import Header from 'components/header/header';
import '/styles/globals.css';

function NicolasFrontEnd({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nicolas Cage Webshop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default NicolasFrontEnd;
