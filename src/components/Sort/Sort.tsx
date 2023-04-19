import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { FiAlignRight } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'

import styles from './sort.module.scss'
import { selectSort, setSort } from '@/src/store/reducers/sortReducer'

const Sort = () => {

  const sortArray = [
    { type: 'По количеству оценок', query: 'ratingKinopoiskVoteCount-ASC' },
    { type: 'По рейтингу', query: 'ratingKinopoisk-ASC' },
    { type: 'По дате выхода' , query: 'year-DESC'},
    { type: 'По алфавиту', query: 'nameRu-ASC' }
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
        <div>{reduxSort.type}</div>
        {active ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      <div className={active ? `${styles.dropdownMenu}` : `${styles.none}`}>
        <div className={`${styles.greyText} ${styles.dropdownMenu__item}`}>Сортировать</div>
        {sortArray.map((el, idx) => (
          <div
            onClick={() => {
              setActive(false)
              dispatch(setSort({type: `${el.type}` , query: `${el.query}`}))
            }}
            className={reduxSort.type === el.type ? `${styles.greyText} ${styles.dropdownMenu__item} ${styles.active}` : `${styles.greyText} ${styles.dropdownMenu__item}`}
            key={idx}
          >
            {el.type}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sort
