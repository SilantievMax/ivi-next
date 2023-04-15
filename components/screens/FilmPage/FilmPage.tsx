import React from 'react'
import styles from './filmpage.module.scss'
import Link from 'next/link'

const FilmPage = () => {
  return (
    <div className={styles.filmPageWrapper}>
      <div className={styles.breadCrumbs}>
        <Link as='/movies' href='/MoviesPage'>
          <span className={styles.breadCrumbs__font}>Фильмы</span>
        </Link>
        <span className={styles.dot}>.</span>
        <span className={`${styles.breadCrumbs__genre} ${styles.breadCrumbs__font}`}>Триллеры</span>
      </div>
      <div className={styles.filmSectionContainer}></div>
      <div className={styles.filmSection__content}>
        <div className={styles.filmTitle}>
          <h1 className={styles.filmTitle__content}>Бойцовский клуб (Фильм 1999) смотреть
            онлайн</h1>
        </div>
        <div>
          <span>1999 2ч. 13мин. 18+</span>
          <div>
            <span></span>
          </div>
          <span></span>
        </div>
      </div>

    </div>
  )
}

export default FilmPage
