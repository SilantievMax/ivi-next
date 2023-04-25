import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Oval } from 'react-loader-spinner'

import { Button } from '../../Button/Button'

import styles from './Person.module.scss'
import PersonMovies from './PersonMovies'
import { IInfoPerson, IPersonMovies } from '@/src/types/PersonTypes'

const PersonPage: FC = () => {
  const {
    back,
    query: { id }
  } = useRouter()
  const { t } = useTranslation()
  const [person, getPerson] = useState<IInfoPerson>()

  const fetchById = async () => {
    fetch(`http://localhost:3003/info/person/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => getPerson(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchById()
  }, [id])

  if (!person?.person) return <Oval wrapperClass={styles.loader} color='rgba(255, 255, 255, .72)' secondaryColor='red' />

  return (
    <div className={styles.personPage}>
      <div className={styles.personPage__btn}>
        <Button onClick={() => back()} size='iconGoBack' children='Назад' icon={<MdArrowBackIosNew size={25} />} />
      </div>
      <section className={styles.person}>
        <div className={styles.person__header}>
          <div className={styles.person__img}>
            <img src={`${person?.person.posterUrl}`} alt='' />
          </div>
          <h2 className={styles.person__name}>{`${person?.person.nameRu}`}</h2>
          <p className={styles.person__enName}>{`${person?.person.nameEn}`}</p>
        </div>
      </section>
      <section className={styles.movies}>
        <div className={styles.movies__header}>
          <h3>{t('Full filmography')}</h3>
          <p>{`${person?.movies.length} фильма`}</p>
        </div>
        <span className={styles.border}></span>
        {person?.movies
          .filter((j, i) => i < 8)
          .map((movie: IPersonMovies, i) => (
            <PersonMovies key={i} movie={movie} />
          ))}
      </section>
    </div>
  )
}

export default PersonPage
