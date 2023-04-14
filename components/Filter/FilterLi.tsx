import React, { useState } from 'react'
import styles from '@/components/Filter/filter.module.scss'
import { AiOutlineCheck } from 'react-icons/ai'

interface ILi {
  content: string
  className: string

}
const FilterLi = (props: ILi) => {
  const { content, className } = props
  const [active, setActive] = useState<boolean>(false)

  return (
    <div onClick={() => setActive(!active)} className={styles.filterDropdown__itemContainer}>
      <li className={className}>
        {content}
      </li>
      <AiOutlineCheck className={active ? styles.filterDropdown__active : styles.filterDropdown__check}/>
    </div>
  )
}

export default FilterLi
