import React from 'react'
import styles from './film.module.scss'
import Link from 'next/link'
import FilmPage from '@/components/screens/FilmPage/FilmPage'
interface IFilm {
  src: string
}
const Film = (props: IFilm) => {
  const {src} = props
  return (
    <Link href='/PickedMoviePage'>
      <div className={styles.filmCard__container}>
        <div style={{backgroundImage: `url('${src}')`}} className={styles.filmCard}>
          <div className={styles.filmCard__inside}>
            <div className={styles.filmCard__inside__content}>
              <span className={styles.rateFont}>8.6</span>
              <span className={`${styles.filmCard__text} ${styles.gray}`}>сюжет</span>
              <div className={styles.progress}></div>
              <span className={styles.filmCard__text}>1999, США, триллеры</span>
              <span className={styles.filmCard__text}>133 минуты</span>
            </div>
          </div>

        </div>
        <div className={styles.filmCard__description}>
          <span>1+1</span>
          <span className={styles.subscribeText}>Подписка</span>
        </div>
      </div>
    </Link>
  )
}

export default Film
