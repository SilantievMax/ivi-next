import Link from 'next/link';
import React, { FC } from 'react';
import style from './Person.module.scss';
import { IFilms } from './PersonInterfase';
import { Button } from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';


const PersonMovies: FC<{movie: IFilms}> = ({movie}) => {
  const { rating, nameRu } = movie
  const { t } = useTranslation()
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
            <p>{t('Rating:')} {rating}</p>
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