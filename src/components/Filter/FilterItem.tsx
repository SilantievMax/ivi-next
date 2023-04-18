import React, {
  AllHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps, HTMLAttributes,
  ReactNode,
  useState
} from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import styles from './filter.module.scss'

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
  const [active, setActive] = useState<boolean>(false)
  const [visibility, setVisibility] = useState<boolean>(false)

  return (
    <div onClick={onClick}
         className={styles.filtersWrapper}>
      <div onClick={() => {
        setVisibility(!visibility)
        setActive(!active)
      }} className={styles.filtersContainer__filter}>
        <span>{title}</span>
        {active ? <AiOutlineUp /> :
          <AiOutlineDown />}
      </div>
      {visibility ? content : ''}
    </div>
  )
}

export default FilterItem
