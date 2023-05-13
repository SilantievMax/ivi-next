import React, { FC } from 'react'

import styles from './LinkItem.module.scss'
import { ILinks } from '@/src/types/types'
import { useTranslation } from 'react-i18next'

interface LinkItemProps {
  data: ILinks[]
  heading?: string
}

const LinkItem: FC<LinkItemProps> = ({ heading, data }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.item}>
      <h6 className={styles.text}>{heading ? t(`${heading}`) : ''}</h6>
      {data.map(({ title, link }, id) => (
        <a key={id} className={styles.link} href={link} target='_blank'>
          {t(`${title}`)}
        </a>
      ))}
    </div>
  )
}

export default LinkItem
