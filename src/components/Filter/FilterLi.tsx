import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { useSelector } from 'react-redux'

import styles from './filter.module.scss'
import { selectCountries, selectCountryList, selectGenres, selectGenresList, selectPickedYear } from '@/src/store/reducers/filterReducer'

interface ILi {
  content: string
  className: string
  id?: number
}
const FilterLi = (props: ILi) => {
  const { content, className, id } = props
  const [active, setActive] = useState<boolean>(false)
  const currentYear = useSelector(selectPickedYear)
  const pickedGenres = useSelector(selectGenres)
  const pickedCountries = useSelector(selectCountries)
  const pickedCountriesList = useSelector(selectCountryList)
  const pickedGenresList = useSelector(selectGenresList)

  return (
    <div onClick={() => setActive(!active)} className={active && content !== 'Все годы' ? `${styles.filterDropdown__itemContainer} ${styles.active}` : styles.filterDropdown__itemContainer}>
      <li className={className}>
        {content}
      </li>
      <AiOutlineCheck className={content.split(' ')[0] === currentYear
        || pickedGenres.indexOf(id || 0) !== -1 && pickedGenresList.indexOf(content) !== -1
        || pickedCountries.indexOf(id || 0) !== -1 && pickedCountriesList.indexOf(content) !== -1
        || content === currentYear
        ? styles.filterDropdown__active : styles.filterDropdown__check}/>
    </div>
  )
}

export default FilterLi
