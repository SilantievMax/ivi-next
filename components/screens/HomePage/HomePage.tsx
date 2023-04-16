import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { feedback, review } from '../../Reviews/props/props'

import { Button } from '@/components/Button/Button'
import Reviews from '@/components/Reviews/Reviews'
import PersonPage from '../PersonPage/PersonPage'
import Movies from '../Movies/Movies'

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
 {/* <Movies/> */}
      {/* <Reviews items={feedback} titleBtn='Отзывы' btn='Оставить отзывы' aboutTheFilm='О фильме...' /> */}
      {/* <Reviews items={review} titleBtn='Рецензия' btn='Написать рецензию' /> */}
    </div>
  )
}

export default HomePage
