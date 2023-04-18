import React, { AllHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';



import styles from './filter.module.scss';
import { useOuside } from '@/src/hooks/useOutside';


interface IFilter {
  title: string
  content: ReactNode
  visibility?: boolean
  onClick?: any
}

const FilterItem = ({
                      title,
                      content,
                      onClick,
                      ...props
                    }: IFilter): JSX.Element => {
  // const [active, setActive] = useState<boolean>(false)
  // const [visibility, setVisibility] = useState<boolean>(false)
const { ref, isShow, setIsShow } = useOuside(false)
  return (
    <div onClick={onClick}
         className={styles.filtersWrapper}>
      <div ref={ref} onClick={() => {
        setIsShow(!isShow)
        // setActive(!active)
      }} className={styles.filtersContainer__filter}>
        <span>{title}</span>
        {isShow ? <AiOutlineUp /> :
          <AiOutlineDown />}
      </div>
      {isShow ? content : ''}
    </div>
  )
}

export default FilterItem