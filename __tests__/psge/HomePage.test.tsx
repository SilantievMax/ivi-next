import '@testing-library/jest-dom';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { debug } from 'console';
import fetchMock from 'jest-fetch-mock';
import nodeFetch from 'node-fetch';
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';



import Home from '../../pages/index';
import Movies from '../../pages/movies';



import HomePage from '@/src/components/screens/HomePage/HomePage';
import i18n from '@/src/i18next/i18n';
import { store } from '@/src/store/store';


fetchMock.enableMocks()
// global.fetch = nodeFetch;
// jest.mock('axios', () => '')
jest.mock('react-slick', () => () => <div>SLider</div>)
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
const data = {
  count: 40,
  rows: [   
    {
      id: 10,
      kinopoiskId: 462682,
      nameRu: 'Волк с Уолл-стрит',
      nameEn: 'The Wolf of Wall Street',
      ratingKinopoiskVoteCount: 1089287,
      ratingKinopoisk: 8,
      year: 2013,
      type: 'FILM',
      filmLength: 180,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/462682.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/462682.jpg',
      genres: [
        { id: 4, nameRu: 'драма', nameEn: null },
        { id: 11, nameRu: 'криминал', nameEn: null },
        { id: 10, nameRu: 'биография', nameEn: null },
        { id: 8, nameRu: 'комедия', nameEn: null }
      ],
      countries: [{ id: 1, nameRu: 'США', nameEn: null }]
    }
  ]
}
describe('HomePage', () => {
  beforeEach(() => {
    fetchMock.mockResponse(req => {
      return Promise.resolve(JSON.stringify(data))
    })   
  })
  it.only('renders HomePage', async () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <HomePage />
        </I18nextProvider>
      </Provider>
    )
    
    await waitFor(() => expect(screen.getByTestId('HomePage')).toBeInTheDocument())
  })
})