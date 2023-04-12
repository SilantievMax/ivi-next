import type { AppProps } from 'next/app'
import { FC } from 'react'
import '../src/i18next/18n'

import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
