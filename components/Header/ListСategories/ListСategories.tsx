import React, { FC } from 'react'

import { bellAlert } from 'img/imges'

import styles from './ListСategories.module.scss'
import { ListCategoriesProps } from './ListСategories.props'

const ListCategories: FC<ListCategoriesProps> = ({ variant, children }) => {
  if (!variant) {
    return (
      <div className={styles.container}>
        <img src={bellAlert.src} alt='bell' />
        <p>Здесь появляются только важные сообщения</p>
      </div>
    )
  }
  return <div>{children}</div>
}

export default ListCategories
