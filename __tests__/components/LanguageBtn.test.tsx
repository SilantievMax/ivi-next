import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';



import LanguageBtn from '@/src/components/LanguageBtn/LanguageBtn';
import i18n from '@/src/i18next/i18n';


describe('LanguageBtn', () => {
  it('Checking the language change button', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageBtn />
      </I18nextProvider>
    )
    const language = screen.getByRole('language')
    expect(language).toBeInTheDocument()
    expect(screen.getByText(/En/i)).toBeInTheDocument()
    fireEvent.click(language)
    expect(screen.getByText(/Ru/i)).toBeInTheDocument()
  })
})