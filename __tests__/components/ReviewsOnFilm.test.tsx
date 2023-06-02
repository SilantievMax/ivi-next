import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import FormReview, { FormReviewProps } from '@/src/components/ReviewsOnFilm/FormReview/FormReview';
import ReviewsOnFilm from '@/src/components/ReviewsOnFilm/ReviewsOnFilm';
import i18n from '@/src/i18next/i18n';
import { store } from '@/src/store/store';

global.fetch = require('node-fetch')
jest.mock('axios')
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/movies/comment',
      query: { id: '6' },
      asPath: '/movies/comment',
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

describe('ReviewsOnFilm', () => {
  it('Review form render default', async () => {
    render(
      <Provider store={store} >
        <I18nextProvider i18n={i18n}>
          <ReviewsOnFilm />
        </I18nextProvider>
      </Provider>
    );
    expect(await screen.findByText(/Рецензии/i)).toBeInTheDocument()
    const btn = await screen.findByTestId('btn-review')
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
    const input = await screen.findByTestId('input-title')
    await waitFor(() => expect(input).toBeInTheDocument())
    fireEvent.input(input, { target: { value: 'Рецензия' } })
  })
  it('Review form', async () => {
    const baseProps: FormReviewProps = {
      formName: 'Review',
      idReview: 6,
      movieId: 6,
      setShow: jest.fn(),
      setSent: jest.fn()
    }
    render(
      <I18nextProvider i18n={i18n}>
        <FormReview {...baseProps} />
      </I18nextProvider>
    )
    const input = await screen.findByTestId('input-title')
    await waitFor(() => expect(input).toBeInTheDocument())
  })
  it('Comment form', async () => {
    
    const baseProps: FormReviewProps = {
      formName: 'Comment',
      idReview: 6,
      movieId: 6,
      setShow: jest.fn(),
      setSent: jest.fn()
    }
    render(
      <I18nextProvider i18n={i18n}>
        <FormReview {...baseProps} />
      </I18nextProvider>
    )
    const input = await screen.findByTestId('textarea-comment')
    await waitFor(() => expect(input).toBeInTheDocument())
  })
})