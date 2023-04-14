import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import styles from './filter.module.scss'

const FilterItem = () => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div onClick={() => setActive(!active)} className={styles.filtersContainer__filter}>
      <span>Жанры</span>
      {active ? <AiOutlineUp /> :
        <AiOutlineDown />}
    </div>
  )
}

export default FilterItem
