import { Slider } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Simulate } from 'react-dom/test-utils'
import { AiOutlineCheck } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'

import styles from './filter.module.scss'
import FilterItem from './FilterItem'
import FilterLi from './FilterLi'
import { Button } from '@/src/components/Button/Button'
import Carousel from '@/src/components/Carousel/Carousel'

import invalid = Simulate.invalid

const Filter = () => {
  const [reviewAmount, setReviewAmount] = useState<number>(0)
  const [rateAmount, setRateAmount] = useState<number>(7.3)
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
    '1980-1990',
    'до 1980'
  ]
  const countryArray = [
    'Австралия',
    'Аргентина',
    'Армения',
    'Беларусь',
    'Бельгия',
    'Бразилия',
    'Великобритания',
    'Венгрия',
    'Германия',
    'Гонконг',
    'Дания',
    'Индия',
    'Ирландия',
    'Испания',
    'Италия',
    'Казахстан',
    'Канада',
    'Китай',
    'Колумбия',
    'Мексика',
    'Нидерланды',
    'Новая Зеландия',
    'Норвегия',
    'Польша',
    'Россия',
    'СССР',
    'США',
    'Таиланд',
    'Турция',
    'Финляндия',
    'Франция',
    'Швейцария',
    'Швеция',
    'ЮАР',
    'Южная Корея',
    'Япония'
  ]
  const genreArray = [
    'Артхаус',
    'Биография',
    'Боевики',
    'Вестерн',
    'Военные',
    'Детективы',
    'Для детей',
    'Документальные',
    'Драмы',
    'Зарубежные',
    'Исторические',
    'Катастрофы',
    'Комедии',
    'Криминал',
    'Мелодрамы',
    'Мистические',
    'Музыкальные',
    'По комиксам',
    'Приключения',
    'Русские',
    'Семейные',
    'Советские',
    'Спорт',
    'Триллеры',
    'Ужасы',
    'Фантастика',
    'Фэнтези'
  ]
  const handleReviewChange = (event: Event, newValue: number | number[]) => {
    setReviewAmount(newValue as number)
  }

  const handleRateChange = (event: Event, newValue: number | number[]) => {
    setRateAmount(newValue as number)
  }

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersContainer__item}>
        <FilterItem
          title='Жанры'
          content={
            <div className={styles.filterDropdown__content}>
              <ul className={styles.filterDropdown__list}>
                {genreArray.map((el, idx) => (
                  <FilterLi key={idx} content={el} className={styles.filterDropdown__item} />
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
                  <FilterLi key={idx} content={el} className={styles.filterDropdown__item} />
                ))}
              </ul>
            </div>
          }
          title='Страны'
        />
        <FilterItem
          content={
            <div className={styles.filterDropdown__content}>
              <ul className={styles.filterDropdown__column}>
                {yearArray.map((el, idx) => (
                  <FilterLi key={idx} content={el} className={styles.filterDropdown__item} />
                ))}
              </ul>
            </div>
          }
          title='Годы'
        />
        <FilterItem
          content={
            <div className={styles.filterDropdown__slider}>
              <span>{`От ${reviewAmount}`}</span>
              <Slider
                sx={{ color: '#8c85b9' }}
                onChange={handleReviewChange}
                min={0}
                max={500000}
                step={10000}
                value={reviewAmount}
                defaultValue={reviewAmount}
                aria-label='Default'
                valueLabelDisplay='auto'
              />
              <Button color='gradient' children='Подтвердить' />
            </div>
          }
          title='Количество оценок(от)'
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
              <Button color='gradient' children='Подтвердить' />
            </div>
          }
          title='Рейтинг(от)'
        />
      </div>
      <div className={styles.removeFilterBox}>
        <FiX className={styles.removeFilterBox__btn} />
        Сбросить фильтры
      </div>
    </div>
  )
}

export default Filter
