import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import style from './Person.module.scss'
import { Button } from '@/src/components/Button/Button'
import { IPersonMovies } from '@/src/types/PersonTypes'
import { useDispatch } from 'react-redux'
import { setPickedMovie } from '@/src/store/reducers/dataBaseReducer'

const PersonMovies: FC<{ movie: IPersonMovies }> = ({ movie }) => {
  const { ratingKinopoisk, posterUrlPreview, nameRu, id } = movie
  const { t } = useTranslation()
  const dispatch = useDispatch()
  return (
    <div className={style.movie}>
      <Link onClick={() => dispatch(setPickedMovie(id))} href={`/movies/${id}`} className={style.movie__link}>
        <div className={style.movie__img}>
          <img src={`${posterUrlPreview}`} alt='' />
        </div>
        <div className={style.movie__body}>
          <div className={style.movie__header}>
            <span>2018</span>
            <h3>{nameRu}</h3>
            <p>
              {t('Rating:')} {ratingKinopoisk}
            </p>
          </div>
          <Button className={style.movie__btn} color='gray'>
            {t('More detailed')}
          </Button>
        </div>
      </Link>
    </div>
  )
}

export default PersonMovies
