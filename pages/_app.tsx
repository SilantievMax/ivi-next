import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '@/src/i18next/18n'
import Layout from '@/src/components/Layout/Layout'
import { wrapper } from '@/src/store/store'
import '@/styles/globals.scss'

const App = ({ Component, pageProps, ...rest }: AppProps) => {
  const { store } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
