import React, { FC, useState } from 'react'

import { Button } from '../../Button/Button'

import styles from './AdminPage.module.scss'
import ModalGanre from './ModalGanre/ModalGanre'
import ModalMuvie from './ModalMuvie/ModalMuvie'

const AdminPage: FC = () => {
  const [showModalMuvie, setShowModalMuvie] = useState(false)
  const [showModalGange, setShowModalGange] = useState(false)

  return (
    <div className={styles.adminPage}>
      <div className={styles.menu}>
        <ul>
          <li>Фильмы</li>
          <li>Жанры</li>
        </ul>
      </div>
      <div className={styles.adminPanel}>
        <div className={styles.adminPanel__header}>
          <h3>Панель администратора</h3>
          <div>
            <Button size='border' children={'Добавть фильм'} onClick={() => setShowModalMuvie(!showModalMuvie)} />
            <Button size='border' children={'Добавть жанр'} onClick={() => setShowModalGange(!showModalGange)} />
          </div>
        </div>
        <div className={styles.adminPanel__list}>
          {showModalMuvie && <ModalMuvie />}
          {showModalGange && <ModalGanre />}
          {!showModalMuvie && !showModalGange && <div>Список фильмов, жанров</div>}
        </div>
      </div>
    </div>
  )
}

export default AdminPage
