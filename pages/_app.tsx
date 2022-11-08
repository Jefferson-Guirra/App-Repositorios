import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/global.css'
import { SessionProvider } from 'next-auth/react'
import { PayPalScriptProvider} from '@paypal/react-paypal-js'

const initialOptions = {
  'client-id':
    'AcAcqRy0YXQo8w3nLKJBrwz7QUa14gmObIvRDEWI3Rhu_9Ua-8OSzn4tyHxBsv85X-i78aRBCoE9S7Gu',
  currency: 'BRL',
  intent: 'capture',
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
