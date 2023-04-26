import Link from 'next/link';
import React from 'react';
import styles from './film.module.scss';
import { IFilm } from '@/src/types/types'
import { setPickedMovie } from '@/src/store/reducers/dataBaseReducer'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
const Film = (props: {film: IFilm}) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  return (
    <Link href={`/movies/${props.film.id}`}>
      <div onClick={() => {
        dispatch(setPickedMovie(props.film.id))
      }} className={styles.filmCard__container}>
        <div style={{backgroundImage: `url('${props.film.posterUrl}')`}} className={styles.filmCard}>
          <div className={styles.filmCard__inside}>
            <div className={styles.filmCard__inside__content}>
              <span className={styles.rateFont}>{props.film.ratingKinopoisk}</span>
              <span className={`${styles.filmCard__text} ${styles.gray}`}>сюжет</span>
              <div className={styles.progress}></div>
              <span className={styles.filmCard__text}>{`${props.film.year}, ${props.film.countries[0].nameRu}, ${props.film.genres[0].nameRu}`}</span>
              <span className={styles.filmCard__text}>{`${props.film.filmLength} мин.`}</span>
            </div>
          </div>

        </div>
        <div className={styles.filmCard__description}>
          <span className={styles.filmTitle}>{i18n.language === 'en' ? props.film.nameEn : props.film.nameRu}</span>
          <span className={styles.subscribeText}>{t('subscribe')}</span>
        </div>
      </div>
    </Link>
  )
}

export default Film
