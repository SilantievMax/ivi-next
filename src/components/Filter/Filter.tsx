import { Slider } from '@mui/material'
import { capitalize } from '@mui/material'
import { useRouter } from 'next/router'
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
import FilterItem from './FilterItem'
import FilterLi from './FilterLi'
import styles from './filter.module.scss'
import { Button } from '@/src/components/Button/Button'
import { IGenre } from '@/src/types/types'
import { yearArray } from '@/src/globalData/globalData'
import SearchItem from '@/src/components/Filter/SearchItem'


const Filter = () => {
  const dispatch = useDispatch()
  const genres = useSelector(selectGenres)
  const countries = useSelector(selectCountries)
  const [pickedReviewAmount, setSickedReviewAmount] = useState<number>(0)
  const [rateAmount, setRateAmount] = useState<number>(7.3)
  const genresList = useSelector(selectGenresList)
  const countryList = useSelector(selectCountryList)
  const { t } = useTranslation()
  const [genresArray, setGenresArray] = useState<IGenre[]>([])
  const [countryArray, setCountryArray] = useState<IGenre[]>([])
  const router = useRouter()
  const handleReviewChange = (event: Event, newValue: number | number[]) => {
    setSickedReviewAmount(newValue as number)
  }

  const handleRateChange = (event: Event, newValue: number | number[]) => {
    setRateAmount(newValue as number)
  }

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
    genresList.length ? router.push({ pathname: '/movies' }, `/movies/genres=${ucFirst(genresList).join('+')}`, { shallow: true }) : ''
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
                    addGenre(el.id, capitalize(el.nameRu))
                  }}>
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
        <SearchItem type='actors' />
        <SearchItem type='directors' />
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
