import React from 'react'
import { IFilm } from '@/src/types/types'
import styles from './mainPageFilm.module.scss'
import Link from 'next/link'
const MainPageFilm = (props: {film: IFilm, id: number}) => {
  return (
    <Link href={`/movies/${props.film.id}`} className={styles.wrapper} key={props.id}>
      <img className={styles.backgroundImg} src={props.film.posterUrl} alt='poster'/>
      <img className={styles.numImg} src={`https://solea-parent.dfs.ivi.ru/picture/bypass/number${props.id+1}.svg`} alt='number'/>
      <div className={styles.shadow}></div>
    </Link>
  )
}

export default MainPageFilm
