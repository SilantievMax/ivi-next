import React, { FC } from 'react'

import styles from './LinkItem.module.scss'
import { ILinks } from '@/types/types'

interface LinkItemProps {
  data: ILinks[]
  heading?: string
}

const LinkItem: FC<LinkItemProps> = ({ heading, data }) => {
  return (
    <li className={styles.item}>
      <h6 className={styles.text}>{heading}</h6>
      {data.map(({ title, link }) => (
        <a className={styles.link} href={link} target='_blank'>
          {title}
        </a>
      ))}
    </li>
  )
}

export default LinkItem
