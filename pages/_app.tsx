import type { AppProps } from 'next/app'
import { FC } from 'react'
import '../src/i18next/18n'
import { Provider } from 'react-redux'

import { store } from '@/store/store'


import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
