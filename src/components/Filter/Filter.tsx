import { Slider } from '@mui/material';
import { capitalize } from '@mui/material';
import { Router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';



import { selectCountries, selectCountryList, selectGenres, selectGenresList, setCountries, setCountriesList, setGenres, setGenresList, setPickedYear, setReviewAmount } from '../../store/reducers/filterReducer';
import { setRate } from '../../store/reducers/filterReducer';



import FilterItem from './FilterItem';
import FilterLi from './FilterLi';
import styles from './filter.module.scss';
import { Button } from '@/src/components/Button/Button';
import { IGenre } from '@/src/types/types';


const Filter = () => {
  const dispatch = useDispatch()
  const genres = useSelector(selectGenres)
  const countries = useSelector(selectCountries)
  const [pickedReviewAmount, setSickedReviewAmount] = useState<number>(0)
  const [rateAmount, setRateAmount] = useState<number>(7.3)
  const genresList = useSelector(selectGenresList)
  const countryList = useSelector(selectCountryList)
  const { t } = useTranslation()
  const yearArray = [
    'Все годы',
    '2023 год',
    '2022 год',
    '2021 год',
    '2020 год',
    '2019 год',
    '2018 год',
    '2017 год',
    '2016 год',
    '2022-2023',
    '2021-2022',
    '2020-2022',
    '2019-2020',
    '2010-2020',
    '2010-2015',
    '2000-2010',
    '1990-2000',
    '1980-1990'
  ]
  const [genresArray, setGenresArray] = useState<IGenre[]>([])
  const [countryArray, setCountryArray] = useState<IGenre[]>([])
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

  const addGenre = (id: number) => {
    if (genres.indexOf(id) === -1) {
      dispatch(setGenres([...genres, id]))
    } else {
      let arr = [...genres]
      arr.splice(arr.indexOf(id), 1)
      dispatch(setGenres(arr))
    }
  }

  const addCountry = (id: number) => {
    if (countries.indexOf(id) === -1) {
      dispatch(setCountries([...countries, id]))
    } else {
      let arr = [...countries]
      arr.splice(arr.indexOf(id), 1)
      dispatch(setCountries(arr))
    }
  }
  const [urlGenre, setUrlGenre] = useState<string[]>([])
  const router = useRouter()

  function ucFirst(arr: string[]) {
    return arr.map(str => str[0].toUpperCase() + str.slice(1))
  }

  useEffect(() => {
    router.push({ pathname: '/movies', query: { sortBy: 'price' } }, `/movies/${ucFirst(urlGenre).join(', ')}`, { shallow: true })
  }, [urlGenre])

  const urlGenres = (el: IGenre) => {
    const name = el.nameRu
    addGenre(el.id)
    if (urlGenre.includes(name)) {
      setUrlGenre(urlGenre => urlGenre.filter(index => index !== name))
      dispatch(setGenresList([...genresList, capitalize(name)]))
    } else {
      setUrlGenre(urlGenre => [...urlGenre, name])
      dispatch(setGenresList([...genresList, capitalize(name)]))
    }
  }

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersContainer__item}>
        <FilterItem
          title={t('genres')}
          content={
            <div className={styles.filterDropdown__content}>
              <ul className={styles.filterDropdown__list}>
                {genresArray.map((el, idx) => (
                  <div key={idx} onClick={() => urlGenres(el)}>
                    <FilterLi id={el.id} content={capitalize(el.nameRu)} className={styles.filterDropdown__item} />
                  </div>
                ))}
              </ul>
            </div>
          }
        />
        <FilterItem
          content={
            <div className={styles.filterDropdown__content}>
              <ul className={styles.filterDropdown__list}>
                {countryArray.map((el, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      addCountry(el.id)
                      dispatch(setCountriesList([...countryList, capitalize(el.nameRu)]))
                    }}
                  >
                    <FilterLi id={el.id} content={capitalize(el.nameRu)} className={styles.filterDropdown__item} />
                  </div>
                ))}
              </ul>
            </div>
          }
          title={t('countries')}
        />
        <FilterItem
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
              <Button onClick={() => dispatch(setReviewAmount(pickedReviewAmount))} color='darkRed' children='Подтвердить' />
            </div>
          }
          title={t('numberOfRatings')}
        />
        <FilterItem
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
              <Button onClick={() => dispatch(setRate(rateAmount))} color='darkRed' children='Подтвердить' />
            </div>
          }
          title={t('rate')}
        />
      </div>
      <div
        onClick={() => {
          dispatch(setReviewAmount(0))
          dispatch(setRate(7.3))
          dispatch(setCountries([]))
          dispatch(setGenres([]))
          dispatch(setPickedYear('Все годы'))
          setUrlGenre([])
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