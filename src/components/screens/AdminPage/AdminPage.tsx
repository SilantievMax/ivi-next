import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';



import { Button } from '../../Button/Button';



import styles from './AdminPage.module.scss';
import ModalGanre from './ModalGanre/ModalGanre';
import ModalMuvie from './ModalMuvie/ModalMuvie';
import { usersInfo } from '@/src/services/user.service';
import { user } from '@/src/store/reducers/userReducers';


const AdminPage: FC = () => {
  const [showModalMuvie, setShowModalMuvie] = useState(false)
  const [showModalGange, setShowModalGange] = useState(false)
  const [users, setUsers] = useState()
const getUser = async () => {
  
  console.log(await usersInfo())
   
}
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
          <Button size='border' children={'USER'} onClick={() => getUser() } />
          {users}
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