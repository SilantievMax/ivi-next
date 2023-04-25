import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { FiAlignRight } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'

import styles from './sort.module.scss'
import { selectSort, setSort } from '@/src/store/reducers/sortReducer'
import { useTranslation } from 'react-i18next'

const Sort = () => {
  const { t } = useTranslation()
  const sortArray = [
    { type: 'sortByAmount', query: 'ratingKinopoiskVoteCount-ASC' },
    { type: 'sortByRating', query: 'ratingKinopoisk-ASC' },
    { type: 'sortByDate' , query: 'year-DESC'},
    { type: 'sortByAlphabet', query: 'nameRu-ASC' }
  ]
  const [active, setActive] = useState<boolean>(false)
  const dispatch = useDispatch()
  const reduxSort = useSelector(selectSort)
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return (
    <div ref={wrapperRef}>
      <div onClick={() => setActive(!active)} className={styles.genreSorting}>
        <FiAlignRight />
        <div>{t(reduxSort.type)}</div>
        {active ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      <div className={active ? `${styles.dropdownMenu}` : `${styles.none}`}>
        <div className={`${styles.greyText} ${styles.dropdownMenu__item}`}>{t('sort')}</div>
        {sortArray.map((el, idx) => (
          <div
            onClick={() => {
              setActive(false)
              dispatch(setSort({type: `${el.type}` , query: `${el.query}`}))
            }}
            className={reduxSort.type === el.type ? `${styles.greyText} ${styles.dropdownMenu__item} ${styles.active}` : `${styles.greyText} ${styles.dropdownMenu__item}`}
            key={idx}
          >
            {t(el.type)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sort
