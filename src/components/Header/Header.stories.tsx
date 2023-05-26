import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import '../../../styles/globals.scss'

import Header from './Header'
import i18n from '@/src/i18next/i18n'
import { store } from '@/src/store/store'

export default {
  title: 'Header',
  component: Header
}

export const Default = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Header />
    </I18nextProvider>
  </Provider>
)
