import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import style from './Person.module.scss'
import { Button } from '../../Button/Button'
import { IPersonMovies } from '@/src/types/PersonTypes'

const PersonMovies: FC<{ movie: IPersonMovies }> = ({ movie }) => {
  const { ratingKinopoisk, posterUrlPreview, nameRu, nameEn, year } = movie
  const { t, i18n } = useTranslation()
  return (
    <div className={style.movie}>
      <Link href={`/movies/${movie.id}`} className={style.movie__link}>
        <div className={style.movie__img}>
          <img src={`${posterUrlPreview}`} alt='' />
        </div>
        <div className={style.movie__body}>
          <div className={style.movie__header}>
            <span>{year}</span>
            <h3>{i18n.language === 'en' ? nameEn : nameRu}</h3>
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
