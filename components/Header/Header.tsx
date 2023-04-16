import Link from 'next/link'
import React, { FC } from 'react'

import { Button } from 'components/Button/Button'

import { bell, logo, magnifyingGlass, paple } from 'img/imges'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__t}>
        <Link href='/'>
          <img src={logo.src} alt='logo' />
        </Link>
        <nav className={styles.nav}>
          <Link href='/'>Мой Иви</Link>
          <Link href='/new'>Что нового</Link>
          <Link href='/movies'>Фильмы</Link>
          <Link href='/series'>Сериалы</Link>
          <Link href='/animation'>Мультфильмы</Link>
          <Link href='/tvplus'>TV+</Link>
        </nav>
      </div>
      <div className={styles.header__b}>
        <Button color="gradient" children='Оплатить подписку' />
        <Button img={magnifyingGlass.src} children={<h3 className={styles.color}>Поиск</h3>} />
        <Button img={bell.src} />
        <Button  className={styles.costom_btn} img={paple.src} />
      </div>
    </header>
  )
}

export default Header
