import axios from 'axios'
import Link from 'next/link'
import React, { FC } from 'react'
import { Oval } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'

import LanguageBtn from '../LanguageBtn/LanguageBtn'

import styles from './Profile.module.scss'
import { Button } from '@/src/components/Button/Button'
import { bookmark, card, clipboard, rectangleStack, share, trophy, tvCategory, union } from '@/src/img/imges'
import { googleAuth, logout, vkAuth } from '@/src/services/auth.service'
import { setOpenAuth } from '@/src/store/reducers/authReducer'
import { isAdmin, isLoading, setAuth, user } from '@/src/store/reducers/userReducers'
import { AppDispatch } from '@/src/store/store'

const profileCategory = [
  { img: rectangleStack.src, title: 'Покупки' },
  { img: bookmark.src, title: 'Смотреть позже' },
  { img: union.src, title: 'История просмотров' },
  { img: clipboard.src, title: 'Подписки' },
  { img: trophy.src, title: 'Активация сертификата' },
  { img: tvCategory.src, title: 'Вход по коду' },
  { img: card.src, title: 'Способ оплаты' },
  { img: share.src, title: 'Пригласить друзей' }
]
const Profile: FC = () => {
  const auth = useSelector(setAuth)
  const loading = useSelector(isLoading)
  const use = useSelector(user)
  const dispatch = useDispatch<AppDispatch>()
  console.log(auth)
  const admin = useSelector(isAdmin)
  // const google = async () => {
  //   try {
  //     const { data } = await axios.get('http://localhost:3006/auth/vk')
  //     console.log('11')
  //     console.log(data)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  return (
    <div className={styles.cards}>
      <div className={styles.card_l}>
        <ul className={styles.list}>
          {profileCategory.map((item, index) => (
            <li key={index} className={styles.item}>
              <img src={item.img} alt='icon' />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      {loading ? (
        <div className={styles.card_r}>
          <Oval wrapperClass={styles.loader} color='rgba(255, 255, 255, .72)' secondaryColor='red' />
        </div>
      ) : (
        <div className={styles.card_r}>
          {auth ? (
            <Button onClick={() => dispatch(logout())} size='border' children='Выйти' color='redOpacity' />
          ) : (
            <>
              <Button onClick={() => dispatch(setOpenAuth(true))} size='border' children='Войти или зарегистрироваться' color='redOpacity' />
              <Button onClick={() => dispatch(vkAuth())} color='darkRed' children='Vk' />
              <Button onClick={() => dispatch(googleAuth())} color='darkRed' children='Google' />
            </>
          )}
          {admin ? (
            <Link href='/admin'>
              <Button size='border' children='Админ панель' color='redOpacity' />
            </Link>
          ) : (
            ''
          )}
          <div className={styles.settings_wrapper}>
            <div className={styles.settings}>
              <Link href='/profile/settings'>Настройки</Link>
              <a href='https://ask.ivi.ru/?_gl=1*1msjass*_ga*NjYzNjY3NDguMTY1MTQyOTE1MA..*_ga_GETQ4387MJ*MTY4MTYyNTQ5NS4yOS4xLjE2ODE2Mjg4NjMuNDYuMC4w' target='_blank'>
                Помощь
              </a>
            </div>
            <div>
              <LanguageBtn />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
