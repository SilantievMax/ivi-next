import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import Film from '@/src/components/Film/Film'
import i18n from '@/src/i18next/i18n'
import { store } from '@/src/store/store'
import { IFilm } from '@/src/types/types'

const props: IFilm = {
  countries: [{ id: 1, nameRu: 'США', nameEn: '' }],
  filmLength: 181,
  genres: [
    { id: 2, nameRu: 'боевик', nameEn: '' },
    { id: 1, nameRu: 'фантастика', nameEn: '' }
  ],
  id: 31,
  kinopoiskId: 843650,
  nameEn: 'Avengers: Endgame',
  nameRu: 'Мстители: Финал',
  posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/843650.jpg',
  posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/843650.jpg',
  ratingKinopoisk: 7.8,
  ratingKinopoiskVoteCount: 728757,
  type: 'FILM',
  year: 2019,
  coverUrl: 'https://',
  slogan: 'kinopoiskapiunofficial',
  description: 'jkl',
  shortDescription: '',
  ratingMpaa: '7',
  ratingAgeLimits: '8',
  startYear: 2019,
  endYear: 2019,
  serial: false,
  shortFilm: false,
  completed: false
}
describe('Film', () => {
  it('Renders Film', () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Film film={props} />
        </I18nextProvider>
      </Provider>
    )
    expect(screen.getByText(/Мстители: Финал/i)).toBeInTheDocument()
    expect(screen.getByText(/боевик/i)).toBeInTheDocument()
  })
})