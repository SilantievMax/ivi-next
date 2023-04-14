import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';



import ReviewsBtn from '@/components/ReviewBtn/ReviewBtn';
import Reviews from '@/components/Reviews/Reviews';


const HomePage: FC = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <h1>{t('Welcome to React')}</h1>
      <Reviews/>
    </div>
  )
}

export default HomePage