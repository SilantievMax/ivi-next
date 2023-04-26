import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { feedback, review } from '../../Reviews/props/props'
import AdminPage from '../AdminPage/AdminPage'
import MoviesPage from '../Movies/MoviesPage'
import PersonPage from '../PersonPage/PersonPage'

import { Button } from '@/src/components/Button/Button'
import Reviews from '@/src/components/Reviews/Reviews'
import { useActions } from '@/src/hooks/useActions'
import { InfoService } from '@/src/services/info.service'
import { MoviesService } from '@/src/services/movies.sevice'
import { IFilm } from '@/src/types/types'

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
