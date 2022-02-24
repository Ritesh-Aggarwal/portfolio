import '../styles/globals.css'
import '../styles/index.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <main className="app">
      <Head>
        <title>Ritesh Aggarwal</title>
      </Head>
      <Navbar active={pageProps?pageProps.active:'INTRO'}/>
      <Component {...pageProps} />
    </main>
}

export default MyApp
