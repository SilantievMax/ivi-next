import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import { useRouter } from 'next/router'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import MoviesPage from '@/src/components/screens/Movies/MoviesPage'
import i18n from '@/src/i18next/i18n'
import { store } from '@/src/store/store'

fetchMock.enableMocks()
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
jest.mock('react-slick', () => () => <div>SLider</div>)

describe('MoviesPage', () => {
  it('Renders MoviesPage', () => {
    ;(useRouter as jest.Mock).mockReturnValue({
      route: '/movies',
      basePath: '',
      isLocaleDomain: false,
      pathname: '/movies',
      shallow: true,
      query: {},
      asPath: '/movies',
      push: jest.fn()
    })
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <MoviesPage />
        </I18nextProvider>
      </Provider>
    )
    expect(screen.getByText(/Фильмы смотреть онлайн/i)).toBeInTheDocument()
    expect(screen.getByTestId('filter')).toBeInTheDocument()
    expect(screen.getAllByText(/По количеству оценок/i)).toBeTruthy()
    expect(screen.getAllByTestId('genres')).toBeTruthy()
  })
})
