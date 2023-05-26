import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import '../../../styles/globals.scss'

import Layout from './Layout'
import i18n from '@/src/i18next/i18n'
import { store } from '@/src/store/store'

export default {
  title: 'Layout',
  component: Layout
}

export const Default = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Layout title='s' children={undefined}></Layout>
    </I18nextProvider>
  </Provider>
)
