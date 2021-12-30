import '/styles/globals.css';
import type { AppProps } from 'next/app';
import { Head } from 'next/document';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>NC Webshop</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
