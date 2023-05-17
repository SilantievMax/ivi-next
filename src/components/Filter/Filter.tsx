import { Slider, TextField, ThemeProvider } from '@mui/material'
import { capitalize } from '@mui/material'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiX } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCountries,
  selectCountryList,
  selectGenres,
  selectGenresList,
  setCountries,
  setCountriesList,
  setGenres,
  setGenresList,
  setPickedYear,
  setReviewAmount
} from '../../store/reducers/filterReducer'
import { setRate } from '../../store/reducers/filterReducer'
import { createTheme } from '@mui/material/styles'
import FilterItem from './FilterItem'
import FilterLi from './FilterLi'
import styles from './filter.module.scss'
import { Button } from '@/src/components/Button/Button'
import { IGenre } from '@/src/types/types'
import { yearArray } from '@/src/functions/globalData'
import Search from 'antd/es/input/Search'
import Link from 'next/link'
import { AutoComplete } from 'antd'
import { useOuside } from '@/src/hooks/useOutside'
import SearchItem from '@/src/components/Filter/SearchItem'


const Filter = () => {
  const dispatch = useDispatch()
  const genres = useSelector(selectGenres)
  const countries = useSelector(selectCountries)
  const [pickedReviewAmount, setSickedReviewAmount] = useState<number>(0)
  const [rateAmount, setRateAmount] = useState<number>(7.3)
  const [actorValue, setActorValue] = useState<string>('')
  const [dirValue, setDirValue] = useState<string>('')
  const genresList = useSelector(selectGenresList)
  const countryList = useSelector(selectCountryList)
  const { t } = useTranslation()
  const [actorsSearchResult, setActorsSearchResult] = useState<string[]>([])
  const [directorsSearchResult, setDirectorsSearchResult] = useState<string[]>([])
  const [genresArray, setGenresArray] = useState<IGenre[]>([])
  const [countryArray, setCountryArray] = useState<IGenre[]>([])
  const [cur, setCur] = useState<boolean>(false)
  const router = useRouter()
  const handleReviewChange = (event: Event, newValue: number | number[]) => {
    setSickedReviewAmount(newValue as number)
  }




  const handleRateChange = (event: Event, newValue: number | number[]) => {
    setRateAmount(newValue as number)
  }

  useEffect(() => {
    if (actorValue.length !== 0) {
      fetch(`http://localhost:3005/persons/actors?keywords=${actorValue}&page=1&limit=10`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(json => setActorsSearchResult(json))
        .catch(err => console.log(err))
    }
  }, [actorValue])

  useEffect(() => {
    if (dirValue.length !== 0) {
      fetch(`http://localhost:3005/persons/directors?keywords=${dirValue}&page=1&limit=10`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(json => setDirectorsSearchResult(json))
        .catch(err => console.log(err))
    }
  }, [dirValue])

  useEffect(() => {
    fetch('http://localhost:3001/movies/filters/genres', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setGenresArray(json))
      .catch(err => console.log(err))
    fetch('http://localhost:3001/movies/filters/countries', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setCountryArray(json))
      .catch(err => console.log(err))
  }, [])

  const addGenre = (id: number, genre: string) => {
    if (genres.indexOf(id) === -1) {
      dispatch(setGenres([...genres, id]))
    } else {
      let arr = [...genres]
      arr.splice(arr.indexOf(id), 1)
      dispatch(setGenres(arr))
    }
    if (genresList.indexOf(genre) === -1) {
      dispatch(setGenresList([...genresList, genre]))
    } else {
      let arr = [...genresList]
      arr.splice(arr.indexOf(genre), 1)
      dispatch(setGenresList(arr))
    }
  }

  const addCountry = (id: number, country: string) => {
    if (countries.indexOf(id) === -1) {
      dispatch(setCountries([...countries, id]))
    } else {
      let arr = [...countries]
      arr.splice(arr.indexOf(id), 1)
      dispatch(setCountries(arr))
    }
    if (countryList.indexOf(country) === -1) {
      dispatch(setCountriesList([...countryList, country]))
    } else {
      let arr = [...countryList]
      arr.splice(arr.indexOf(country), 1)
      dispatch(setCountriesList(arr))
    }
  }

  function ucFirst(arr: string[]) {
    return arr.map(str => capitalize(str))
  }

  useEffect(() => {
    router.push({ pathname: '/movies' }, `/movies/${ucFirst(genresList).join('+')}`, { shallow: true })
  }, [genresList])


  return (
    <div className={styles.filtersContainer} data-testid='filter'>
      <div className={styles.filtersContainer__item}>
        <FilterItem
          title={t('genres')}
          type='genre'
          content={
            <div className={styles.filterDropdown__content}>
              <ul className={styles.filterDropdown__list}>
                {genresArray.map((el, idx) => (
                  <div key={idx} onClick={() => {
                    addGenre(el.id, capitalize(el.nameRu))}}>
                    <FilterLi id={el.id} content={capitalize(el.nameRu)}
                              className={styles.filterDropdown__item} />
                  </div>
                ))}
              </ul>
            </div>
          }
        />
        <FilterItem
          type='country'
          content={
            <div className={styles.filterDropdown__content}>
              <ul className={styles.filterDropdown__list}>
                {countryArray.map((el, idx) => (
                  <div key={idx} onClick={() => {
                    addCountry(el.id, capitalize(el.nameRu))
                  }}>
                    <FilterLi id={el.id} content={capitalize(el.nameRu)}
                              className={styles.filterDropdown__item} />
                  </div>
                ))}
              </ul>
            </div>
          }
          title={t('countries')}
        />
        <FilterItem
          type='year'
          content={
            <div className={styles.filterDropdown__content}>
              <ul className={styles.filterDropdown__column}>
                {yearArray.map((el, idx) => (
                  <div onClick={() => dispatch(setPickedYear(el.split(' ')[0]))} key={idx}>
                    <FilterLi content={el} className={styles.filterDropdown__item} />
                  </div>
                ))}
              </ul>
            </div>
          }
          title={t('years')}
        />
        <FilterItem
          type='rateNum'
          content={
            <div className={styles.filterDropdown__slider}>
              <span>{`От ${pickedReviewAmount}`}</span>
              <Slider
                sx={{ color: '#8c85b9' }}
                onChange={handleReviewChange}
                min={0}
                max={500000}
                step={10000}
                value={pickedReviewAmount}
                defaultValue={pickedReviewAmount}
                aria-label='Default'
                valueLabelDisplay='auto'
              />
              <Button onClick={() => dispatch(setReviewAmount(pickedReviewAmount))} color='darkRed'
                      children='Подтвердить' />
            </div>
          }
          title={t('numberOfRatings')}
        />
        <FilterItem
          type='rate'
          content={
            <div className={styles.filterDropdown__slider}>
              <span>{`От ${rateAmount}`}</span>
              <Slider
                sx={{ color: '#8c85b9' }}
                onChange={handleRateChange}
                min={0}
                max={10}
                step={0.1}
                value={rateAmount}
                defaultValue={rateAmount}
                aria-label='Default'
                valueLabelDisplay='auto'
              />
              <Button onClick={() => dispatch(setRate(rateAmount))} color='darkRed'
                      children='Подтвердить' />
            </div>
          }
          title={t('rate')}
        />
      </div>
      <div className={styles.crewSearch}>

          <SearchItem type='actors'/>
          <SearchItem type='directors'/>
          {/*<div ref={ref}>*/}
          {/*  <ThemeProvider theme={theme}>*/}
          {/*    <TextField color='secondary' id='standard-basic'*/}
          {/*               onClick={() => setIsShow(true)}*/}
          {/*               label='Поиск по актёру' variant='standard' value={actorValue}*/}
          {/*               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setActorValue(e.target.value)} />*/}
          {/*    {isShow && actorValue.length !== 0 ? <div className={styles.searchResContainer}>{actorsSearchResult.map((el: any, idx) => <Link*/}
          {/*      href={`person/${el.id}`} key={idx}>{el.nameRu}</Link>)}</div> : ''}*/}
          {/*  </ThemeProvider>*/}
          {/*</div>*/}



        {/*<div ref={ref}>*/}
        {/*  <ThemeProvider theme={theme}>*/}
        {/*    <TextField color='secondary'*/}
        {/*               id='standard-basic' label='Поиск по Режиссёру'*/}
        {/*               onClick={() => setIsShow(true)}*/}
        {/*               value={dirValue}*/}
        {/*               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDirValue(e.target.value)}*/}
        {/*               variant='standard' />*/}
        {/*    {isShow && dirValue.length !== 0 ? <div className={`${styles.searchResContainer} ${styles.dir}`}>{directorsSearchResult.map((el: any, idx) => <Link*/}
        {/*      href={`person/${el.id}`} key={idx}>{el.nameRu}</Link>)}</div> : ''}*/}
        {/*  </ThemeProvider>*/}
        {/*</div>*/}


      </div>
      <div
        onClick={() => {
          dispatch(setReviewAmount(0))
          dispatch(setRate(7.3))
          dispatch(setCountries([]))
          dispatch(setGenres([]))
          dispatch(setPickedYear('Все годы'))
          dispatch(setCountriesList([]))
          dispatch(setGenresList([]))
        }}
        className={styles.removeFilterBox}
      >

        <FiX className={styles.removeFilterBox__btn} />
        {t('deleteFilters')}
      </div>
    </div>
  )
}

export default Filter
