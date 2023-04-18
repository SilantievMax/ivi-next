import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai'
import styles from './filter.module.scss';


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