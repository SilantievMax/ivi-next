import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { feedback, review } from '../../Reviews/props/props'

import ReviewsBtn from '@/components/ReviewBtn/ReviewBtn'
import Reviews from '@/components/Reviews/Reviews'
import { Button } from '@/components/Button/Button'

const HomePage: FC = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <div>
   
      {/* <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <h1>{t('Welcome to React')}</h1> */}

      <Reviews size='small' items={feedback} transition={300} btn='Оставить отзывы' aboutTheFilm='О фильме...' />
      <Reviews size='standard' items={review} transition={500} btn='Написать рецензию' />
    </div>
  )
}

export default HomePage
