import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCountries,
  selectGenres,
  setCountries, setCountriesList,
  setGenres,
  setGenresList, setPickedYear
} from '@/src/store/reducers/filterReducer'
import { headerDataArray, headerYearArray, sortData } from '@/src/globalData/globalData'
import { IGenre } from '@/src/types/types'
import styles from './HeaderCategory.module.scss'
import Link from 'next/link'
import { capitalize } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { MoviesService } from '@/src/services/movies.service'

const HeaderCategory = () => {
  const [allGenres, setAllGenres] = useState<IGenre[]>([])
  const [countryArray, setCountry] = useState<IGenre[]>([])
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const genresStore = useSelector(selectGenres)
  const countriesStore = useSelector(selectCountries)

  useEffect(() => {
    MoviesService.getGenres().then(json => setAllGenres(json.sort(sortData('id')))).catch(err => console.log(err))
    MoviesService.getCountries().then(json => setCountry(json.sort(sortData('id')))).catch(err => console.log(err))
  }, [])

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
        <span className={styles.listHeader}>{t('genres')}</span>
        {allGenres.map((el, idx) =>
          idx < 18 ?
            <Link className={styles.listFont} onClick={() => {
              addGenre(el.id, capitalize(el.nameRu))
            }} key={idx} href='/movies'><span>
              {capitalize(el.nameRu)}
            </span></Link> : '')}
        <span className={styles.listHeader}>{t('countries')}</span>
        {countryArray.map((el, idx) =>
          idx < 16 ?
            <Link key={idx} className={styles.listFont} onClick={() => addCountry(el.id, el.nameRu)}
                  href='/movies'><span>{el.nameRu}</span></Link> : ''
        )}
        <span className={styles.listHeader}>{t('years')}</span>
        {headerYearArray.map((el, idx) =>
          <Link key={idx}
                className={styles.listFont}
                href='/movies'
                onClick={() => {
                  dispatch(setPickedYear(el.split(' ')[0]))
                }}><span>{t(el)}</span></Link>)}
      </div>
      <div className={`${styles.list} ${styles.list__secondBlock}`}>
        {headerDataArray.map((el, idx) => <Link key={idx}
                                                href={el.link}
                                                className={styles.listFont}><span>{t(el.content)}</span></Link>)}
      </div>
    </div>
  )
}

export default HeaderCategory
