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
      id: 1,
      kinopoiskId: 301,
      nameRu: 'Матрица',
      nameEn: 'The Matrix',
      ratingKinopoiskVoteCount: 677706,
      ratingKinopoisk: 8.5,
      year: 1999,
      type: 'FILM',
      filmLength: 136,
      posterUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/bafead8f-fea7-4d92-b1d3-e116c52ba68c/orig',
      posterUrlPreview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/bafead8f-fea7-4d92-b1d3-e116c52ba68c/300x',
      genres: [
        { id: 1, nameRu: 'фантастика', nameEn: null },
        { id: 2, nameRu: 'боевик', nameEn: null }
      ],
      countries: [
        { id: 1, nameRu: 'США', nameEn: null },
        { id: 2, nameRu: 'Австралия', nameEn: null }
      ]
    },
    {
      id: 2,
      kinopoiskId: 309,
      nameRu: 'Эквилибриум',
      nameEn: 'Equilibrium',
      ratingKinopoiskVoteCount: 292176,
      ratingKinopoisk: 7.9,
      year: 2002,
      type: 'FILM',
      filmLength: 107,
      posterUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/603c60b2-e2c3-414c-888b-f38178eb58ee/orig',
      posterUrlPreview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/603c60b2-e2c3-414c-888b-f38178eb58ee/300x',
      genres: [
        { id: 3, nameRu: 'триллер', nameEn: null },
        { id: 4, nameRu: 'драма', nameEn: null },
        { id: 1, nameRu: 'фантастика', nameEn: null },
        { id: 2, nameRu: 'боевик', nameEn: null }
      ],
      countries: [{ id: 1, nameRu: 'США', nameEn: null }]
    },
    {
      id: 3,
      kinopoiskId: 299,
      nameRu: 'Матрица: Перезагрузка',
      nameEn: 'The Matrix Reloaded',
      ratingKinopoiskVoteCount: 260244,
      ratingKinopoisk: 7.7,
      year: 2003,
      type: 'FILM',
      filmLength: 138,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/299.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/299.jpg',
      genres: [
        { id: 1, nameRu: 'фантастика', nameEn: null },
        { id: 2, nameRu: 'боевик', nameEn: null }
      ],
      countries: [{ id: 1, nameRu: 'США', nameEn: null }]
    },
    {
      id: 4,
      kinopoiskId: 5012,
      nameRu: 'Гаттака',
      nameEn: 'Gattaca',
      ratingKinopoiskVoteCount: 205888,
      ratingKinopoisk: 8,
      year: 1997,
      type: 'FILM',
      filmLength: 106,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5012.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5012.jpg',
      genres: [
        { id: 4, nameRu: 'драма', nameEn: null },
        { id: 5, nameRu: 'мелодрама', nameEn: null },
        { id: 6, nameRu: 'детектив', nameEn: null },
        { id: 1, nameRu: 'фантастика', nameEn: null }
      ],
      countries: [{ id: 1, nameRu: 'США', nameEn: null }]
    },
    {
      id: 5,
      kinopoiskId: 88078,
      nameRu: 'Посвященный',
      nameEn: 'The Giver',
      ratingKinopoiskVoteCount: 80693,
      ratingKinopoisk: 6.8,
      year: 2014,
      type: 'FILM',
      filmLength: 97,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/88078.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/88078.jpg',
      genres: [
        { id: 3, nameRu: 'триллер', nameEn: null },
        { id: 4, nameRu: 'драма', nameEn: null },
        { id: 5, nameRu: 'мелодрама', nameEn: null },
        { id: 1, nameRu: 'фантастика', nameEn: null }
      ],
      countries: [
        { id: 1, nameRu: 'США', nameEn: null },
        { id: 3, nameRu: 'Канада', nameEn: null },
        { id: 4, nameRu: 'ЮАР', nameEn: null }
      ]
    },
    {
      id: 6,
      kinopoiskId: 582101,
      nameRu: 'Дивергент',
      nameEn: 'Divergent',
      ratingKinopoiskVoteCount: 382427,
      ratingKinopoisk: 6.7,
      year: 2014,
      type: 'FILM',
      filmLength: 134,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/582101.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/582101.jpg',
      genres: [
        { id: 5, nameRu: 'мелодрама', nameEn: null },
        { id: 6, nameRu: 'детектив', nameEn: null },
        { id: 1, nameRu: 'фантастика', nameEn: null },
        { id: 2, nameRu: 'боевик', nameEn: null }
      ],
      countries: [{ id: 1, nameRu: 'США', nameEn: null }]
    },
    {
      id: 7,
      kinopoiskId: 535429,
      nameRu: 'Академия вампиров',
      nameEn: 'Vampire Academy',
      ratingKinopoiskVoteCount: 82563,
      ratingKinopoisk: 5.8,
      year: 2014,
      type: 'FILM',
      filmLength: 100,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/535429.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/535429.jpg',
      genres: [
        { id: 3, nameRu: 'триллер', nameEn: null },
        { id: 4, nameRu: 'драма', nameEn: null },
        { id: 6, nameRu: 'детектив', nameEn: null },
        { id: 2, nameRu: 'боевик', nameEn: null },
        { id: 7, nameRu: 'фэнтези', nameEn: null },
        { id: 8, nameRu: 'комедия', nameEn: null },
        { id: 9, nameRu: 'ужасы', nameEn: null }
      ],
      countries: [{ id: 1, nameRu: 'США', nameEn: null }]
    },
    {
      id: 8,
      kinopoiskId: 535341,
      nameRu: '1+1',
      nameEn: 'Intouchables',
      ratingKinopoiskVoteCount: 1566562,
      ratingKinopoisk: 8.8,
      year: 2011,
      type: 'FILM',
      filmLength: 112,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/535341.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/535341.jpg',
      genres: [
        { id: 4, nameRu: 'драма', nameEn: null },
        { id: 10, nameRu: 'биография', nameEn: null },
        { id: 8, nameRu: 'комедия', nameEn: null }
      ],
      countries: [{ id: 5, nameRu: 'Франция', nameEn: null }]
    },
    {
      id: 9,
      kinopoiskId: 1143242,
      nameRu: 'Джентльмены',
      nameEn: 'The Gentlemen',
      ratingKinopoiskVoteCount: 1358603,
      ratingKinopoisk: 8.5,
      year: 2019,
      type: 'FILM',
      filmLength: 113,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1143242.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1143242.jpg',
      genres: [
        { id: 11, nameRu: 'криминал', nameEn: null },
        { id: 2, nameRu: 'боевик', nameEn: null },
        { id: 8, nameRu: 'комедия', nameEn: null }
      ],
      countries: [
        { id: 1, nameRu: 'США', nameEn: null },
        { id: 6, nameRu: 'Великобритания', nameEn: null }
      ]
    },
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
    // fetchMock.mockIf("http://localhost:3003/info?limit=20&genres=2", () => {
    //  return Promise.resolve(JSON.stringify(data));
    // });
    // fetchMock.mockIf("http://localhost:3003/info?limit=20&genres=4", () => {
    //  return Promise.resolve(JSON.stringify(data));
    // });
  })
  it.only('renders HomePage unchanged', async () => {
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