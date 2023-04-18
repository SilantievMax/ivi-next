import React, { FC } from 'react'

import styles from './LinkItem.module.scss'
import { ILinks } from '@/src/types/types'

interface LinkItemProps {
  data: ILinks[]
  heading?: string
}

const LinkItem: FC<LinkItemProps> = ({ heading, data }) => {
  return (
    <div className={styles.item}>
      <h6 className={styles.text}>{heading}</h6>
      {data.map(({ title, link }, id) => (
        <a key={id} className={styles.link} href={link} target='_blank'>
          {title}
        </a>
      ))}
    </div>
  )
}

export default LinkItem