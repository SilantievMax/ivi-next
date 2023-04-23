import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { feedback, review } from '../../Reviews/props/props'
import MoviesPage from '../Movies/MoviesPage'
import PersonPage from '../PersonPage/PersonPage'

import { Button } from '@/src/components/Button/Button'
import Reviews from '@/src/components/Reviews/Reviews'
import AdminPage from '../AdminPage/AdminPage'

const HomePage: FC = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <div>
      {/* <AdminPage/> */}
      {/* <PersonPage/> */}
      {/* <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <h1>{t('Welcome to React')}</h1> */}
      {/* <Index/> */}
      {/* <Reviews  titleBtn='Отзывы' btn='Оставить отзывы' aboutTheFilm='О фильме...' /> */}
      {/* <Reviews  movieId={1}  titleBtn='Рецензии' btn='Написать рецензию' /> */}
    </div>
  ) 
}

export default HomePage
