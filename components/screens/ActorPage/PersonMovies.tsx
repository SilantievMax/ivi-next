import Link from 'next/link';
import React, { FC } from 'react';
import style from './Person.module.scss';
import { Button } from '@/components/Button/Button';
import { IFilms } from './PersonInterfase';


const PersonMovies: FC<{movie: IFilms}> = ({movie}) => {
  const {rating,nameRu } = movie

  return (
    <div className={style.movie}>
      
      <Link href='' className={style.movie__link}>
        <div className={style.movie__img}>
          <img src='https://thumbs.dfs.ivi.ru/storage23/contents/0/2/bc8048ba414c2e1c6ade434126b6c9.jpg/172x264/?q=85' alt='' />
        </div>
        <div className={style.movie__body}>
          <div className={style.movie__header}>
            <span>2018</span>
            <h3>{nameRu}</h3>
            <p>Рейтинг: {rating}</p>
          </div>
          <Button className={style.movie__btn} color='gray'>
            Подробнее
          </Button>
        </div>
      </Link>
    </div>
  )
}

export default PersonMovies