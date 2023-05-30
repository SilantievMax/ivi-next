import React, { FC, useState } from 'react'
import styles from './AdminPage.module.scss'
import ModalGenre from '@/src/components/screens/AdminPage/ModalGenre/ModalGenre'
import ModalMovie from '@/src/components/screens/AdminPage/ModalMovie/ModalMovie'
import ModalCountry from '@/src/components/screens/AdminPage/ModalCountry/ModalCountry'

const AdminPage: FC = () => {
  const [showModal, setShowModal] = useState<number>(0)

  return (
    <div className={styles.adminPage}>
      <div className={styles.menu}>
        <ul>
          <li onClick={() => {
            setShowModal(1)
          }}>Фильмы</li>
          <li onClick={() => {
            setShowModal(2)
          }}>Жанры</li>
          <li onClick={() => {
            setShowModal(3)
          }}>Страны</li>
        </ul>
      </div>
      <div className={styles.adminPanel}>
        <div className={styles.adminPanel__header}>
          <h3>Панель администратора</h3>
        </div>
        <div className={styles.adminPanel__list}>
          {showModal === 1 && <ModalMovie />}
          {showModal === 2 && <ModalGenre />}
          {showModal === 3 && <ModalCountry />}
        </div>
      </div>
    </div>
  )
}

export default AdminPage
