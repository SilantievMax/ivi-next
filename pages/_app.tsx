import type { AppProps } from 'next/app'
import { FC } from 'react'
import '../src/i18next/18n'
import { Provider } from 'react-redux'
import { wrapper } from '@/store/store'
import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'

const App = ({ Component, pageProps, ...rest }: AppProps) => {
  const { store } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
