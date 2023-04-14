import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'
import FilterItem from '@/components/Filter/FilterItem'
import styles from './filter.module.scss'

const Filter = () => {

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersContainer__item}>
        <FilterItem/>
        <FilterItem/>
        <FilterItem/>
        <FilterItem/>
      </div>

      <div className={styles.removeFilterBox}>
        <FiX className={styles.removeFilterBox__btn}/>
        Сбросить фильтры
      </div>
    </div>
  )
}

export default Filter
