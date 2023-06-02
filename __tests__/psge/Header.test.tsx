import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';



import Header from '@/src/components/Header/Header';
import i18n from '@/src/i18next/i18n';


global.fetch = require('node-fetch')
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
jest.mock('react-slick', () => '')

describe('Header', () => {
  beforeEach(() => {
    render(
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
    )
  })
  it('Renders subscription buttons', () => {
    expect(screen.getByText(/Оплатить подписку/i)).toBeInTheDocument()
  })
  it('Renders "My ivi" buttons', () => {
    expect(screen.getByText(/Мой иви/i)).toBeInTheDocument()
  })
  it('Renders "Movies" buttons', () => {
    expect(screen.getByText(/Фильмы/)).toBeInTheDocument()
  })
  // it('Renders "En" buttons', () => {
  //   expect(screen.getByText(/En/i)).toBeInTheDocument()
  // })
})