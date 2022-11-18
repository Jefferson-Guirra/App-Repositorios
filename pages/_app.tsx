import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/global.css'
import { SessionProvider } from 'next-auth/react'
import { PayPalScriptProvider} from '@paypal/react-paypal-js'


//liveId=AQ4-Jzoq6WQk60K_pvp_krV9qqnTFVtWppdFiwEa3tEOu01bZIXh4Ccd71OHr9GmU3wHHBvM9aAKKCNr

//clientId=AcAcqRy0YXQo8w3nLKJBrwz7QUa14gmObIvRDEWI3Rhu_9Ua-8OSzn4tyHxBsv85X-i78aRBCoE9S7Gu

const initialOptions = {
  'client-id':
    'AQ4-Jzoq6WQk60K_pvp_krV9qqnTFVtWppdFiwEa3tEOu01bZIXh4Ccd71OHr9GmU3wHHBvM9aAKKCNr',
  currency: 'BRL',
  intent: 'capture'
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </SessionProvider>
  )
}
