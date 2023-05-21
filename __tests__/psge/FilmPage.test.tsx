import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import FilmPage from '@/src/components/screens/FilmPage/FilmPage'
import i18n from '@/src/i18next/i18n'
import { store } from '@/src/store/store'

global.fetch = require('node-fetch')
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: 'movies/6',
      query: 'genre=фантастика',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    }
  }
}))
jest.mock('swiper/css', () => '')
jest.mock('swiper/css/navigation', () => '')
describe('FilmPage', () => {
  it('Renders FilmPage', () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <FilmPage />
        </I18nextProvider>
      </Provider>
    )
     expect(screen.getByRole('status')).toBeInTheDocument
  })
})