import Link from 'next/link';
import React from 'react';
import styles from './film.module.scss';
import { IFilm } from '@/src/types/types'
import { setPickedMovie } from '@/src/store/reducers/dataBaseReducer'
import { useDispatch } from 'react-redux'
const Film = (props: {film: IFilm}) => {
  const dispatch = useDispatch()

  return (
    <Link href={`/movies/${props.film.id}`}>
      <div onClick={() => dispatch(setPickedMovie(props.film))} className={styles.filmCard__container}>
        <div style={{backgroundImage: `url('${props.film.posterUrl}')`}} className={styles.filmCard}>
          <div className={styles.filmCard__inside}>
            <div className={styles.filmCard__inside__content}>
              <span className={styles.rateFont}>{props.film.ratingKinopoisk}</span>
              <span className={`${styles.filmCard__text} ${styles.gray}`}>сюжет</span>
              <div className={styles.progress}></div>
              <span className={styles.filmCard__text}>{`${props.film.year}, ${props.film.countries[0].nameRu}, ${props.film.genres[0].nameRu}`}</span>
              <span className={styles.filmCard__text}>{`${props.film.filmLength} минуты`}</span>
            </div>
          </div>

        </div>
        <div className={styles.filmCard__description}>
          <span>{props.film.nameRu}</span>
          <span className={styles.subscribeText}>Подписка</span>
        </div>
      </div>
    </Link>
  )
}

export default Film
