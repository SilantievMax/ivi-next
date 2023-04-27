import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import Layout from '@/src/components/Layout/Layout'
import '@/src/i18next/i18n'
import { wrapper } from '@/src/store/store'
import '@/styles/globals.scss'

const App = ({ Component, pageProps, ...rest }: AppProps) => {
  const { store } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <Layout title='Movies' description='The best custom online cinema developed by the Hotel Group team'>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
