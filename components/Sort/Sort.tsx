import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDown, AiOutlineMenu, AiOutlineUp } from 'react-icons/ai'
import { FiAlignRight } from 'react-icons/fi'
import styles from './sort.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectSort, setSort } from '@/store/reducers/sortReducer'

const Sort = () => {

  const sortArray = ['По количеству оценок', 'По рейтингу', 'По дате выхода', 'По алфавиту']
  const [active, setActive] = useState<boolean>(false)
  const [currentSort, setCurrentSort] = useState<string>('По количеству оценок')
  const dispatch = useDispatch()
  const reduxSort = useSelector(selectSort)
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef}>
      <div onClick={() => setActive(!active)} className={styles.genreSorting}>
        <FiAlignRight/>
        <div>{reduxSort}</div>
        {active ? <AiOutlineUp/> : <AiOutlineDown/>}
      </div>
      <div className={active ? `${styles.dropdownMenu}` : `${styles.none}`}>
        <div className={`${styles.greyText} ${styles.dropdownMenu__item}`}>Сортировать</div>
        {sortArray.map((el, idx) =>
          <div onClick={() => {
            setActive(false)
            dispatch(setSort(`${el}`))
          }} className={reduxSort === el ? `${styles.greyText} ${styles.dropdownMenu__item} ${styles.active}` : `${styles.greyText} ${styles.dropdownMenu__item}`} key={idx}>{el}</div>
        )}
      </div>
    </div>
  )
}

export default Sort
