import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Person.module.scss';
import { IFilms, IPerson } from './PersonInterfase';
import PersonMovies from './PersonMovies';

const PersonPage: FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [person, setPerson] = useState<IPerson>()

  // console.log(person)

  const fetchById = async () => {
    fetch('https://kinopoiskapiunofficial.tech/api/v1/staff/66539', {
      method: 'GET',
      headers: {
        'X-API-KEY': '44bb910d-c711-4b9c-a9c5-3f5e02162110',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setPerson(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchById()
  }, [])

  return (
    <div className={style.personPage}>
      <div className={style.personPage__btn}>
        
        <div className={style.personPage__btnIcon}> </div>
        <div onClick={() => router.back()}>{t('Back')}</div>
     
      </div>
      <section className={style.person}>
        <div className={style.person__header}>
          <div className={style.person__img}>
            <img src='https://kinopoiskapiunofficial.tech/images/actor_posters/kp/66539.jpg' alt='' />
          </div>
          <h2 className={style.person__name}>Винс Гиллиган</h2>
          <p className={style.person__enName}>Vince Gilligan</p>
        </div>
      </section>
      <section className={style.movies}>
        <div className={style.movies__header}>
          <h3>{t('Full filmography')}</h3>
          <p>{t('8 movies')}</p>
        </div>
        <span className={style.border}></span>
        {person?.films.filter((j,i)=>i<8).map((movie: IFilms, i) => (
          <PersonMovies key={i} movie={movie} />
        ))}
      </section>
    </div>
  )
}

export default PersonPage