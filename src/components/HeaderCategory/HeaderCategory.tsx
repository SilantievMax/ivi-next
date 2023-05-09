import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCountries, selectCountryList,
  selectGenres,
  selectGenresList, setCountries, setCountriesList,
  setGenres,
  setGenresList, setPickedYear
} from '@/src/store/reducers/filterReducer'
import { headerDataArray, headerYearArray } from '@/src/functions/globalData'
import { IGenre } from '@/src/types/types'
import styles from './HeaderCategory.module.scss'
import Link from 'next/link'
import { capitalize } from '@mui/material'

const HeaderCategory = () => {
  const [allGenres, setAllGenres] = useState<IGenre[]>([])
  const [countryArray, setCountry] = useState<IGenre[]>([])
  useEffect(() => {
    fetch('http://localhost:3001/movies/filters/genres', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setAllGenres(json))
      .catch(err => console.log(err))
    fetch('http://localhost:3001/movies/filters/countries', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setCountry(json))
      .catch(err => console.log(err))
  }, [])
  const dispatch = useDispatch()
  const genresStore = useSelector(selectGenres)
  const countriesStore = useSelector(selectCountries)
  const addGenre = (id: number, genre: string) => {
    if (genresStore.indexOf(id) === -1) {
      dispatch(setGenres([id]))
      dispatch(setGenresList([genre]))
      dispatch(setCountriesList([]))
      dispatch(setCountries([]))
      dispatch(setPickedYear('Все'))
    }
  }

  const addCountry = (id: number, country: string) => {
    if (countriesStore.indexOf(id) === -1) {
      dispatch(setCountries([id]))
      dispatch(setCountriesList([country]))
      dispatch(setPickedYear('Все'))
      dispatch(setGenres([]))
      dispatch(setGenresList([]))
    }
  }
  return (
    <div className={styles.headerContent}>
      <div className={`${styles.list} ${styles.border}`}>
        <span className={styles.listHeader}>Жанры</span>
        {allGenres.map((el, idx) =>
          <Link className={styles.listFont} onClick={() => {
            addGenre(el.id, capitalize(el.nameRu))
          }} key={idx} href='/movies'><span>
              {capitalize(el.nameRu)}
            </span></Link>)}
        <span className={styles.listHeader}>Страны </span>
        {countryArray.map((el, idx) =>
          <Link key={idx} className={styles.listFont} onClick={() => addCountry(el.id, el.nameRu)}
                     href='/movies'><span>{el.nameRu}</span></Link>
        )}
        <span className={styles.listHeader}>Годы</span>
        {headerYearArray.map((el, idx) =>
          <Link key={idx}
                className={styles.listFont}
                href='/movies'
                onClick={() => {
                  dispatch(setPickedYear(el.split(' ')[0]))
                }}><span>{el}</span></Link>)}
      </div>
      <div className={`${styles.list} ${styles.list__secondBlock}`}>
        {headerDataArray.map((el, idx) => <Link key={idx}
                                                href={el.link}
                                                className={styles.listFont}><span>{el.content}</span></Link>)}
      </div>
    </div>
  )
}

export default HeaderCategory
