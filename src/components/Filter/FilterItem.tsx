import React, {
  AllHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState
} from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';



import styles from './filter.module.scss';
import { useOuside } from '@/src/hooks/useOutside';
import { useSelector } from 'react-redux'
import {
  selectCountryList,
  selectGenresList,
  selectPickedYear, selectRate, selectReviewAmount
} from '@/src/store/reducers/filterReducer'
import { IGenre } from '@/src/types/types'


interface IFilter {
  title: string
  content: ReactNode
  visibility?: boolean
  type? : string,
}

const FilterItem = ({
                      title,
                      content,
                      type,
                    }: IFilter): JSX.Element => {
const { ref, isShow, setIsShow } = useOuside(false)
const genreList = useSelector(selectGenresList)
const countryList = useSelector(selectCountryList)
const year = useSelector(selectPickedYear)
const rateNum = useSelector(selectReviewAmount)
const rate = useSelector(selectRate)

  return (
    <div ref={ref}
         className={styles.filtersWrapper}>
      <div onClick={() => {
        setIsShow(!isShow)
      }} className={styles.filtersContainer__box}>
        <div className={styles.filtersContainer__filter}>
          <span>{title}</span>
          {isShow ? <AiOutlineUp /> :
            <AiOutlineDown />}
        </div>
        <span className={styles.genresList}>{
            type === 'genre' ? genreList.map((el, idx) => idx === 0 ? el : `, ${el}`)
          : type === 'country' ? countryList.map((el, idx) => idx === 0 ? el : `, ${el}`)
          : type === 'year' ? year
          : type === 'rateNum' ? rateNum
          : type === 'rate' ? rate
          : ''
        }</span>
      </div>
      <div ref={ref}>
        {isShow ? content : ''}
      </div>
    </div>
  )
}

export default FilterItem
