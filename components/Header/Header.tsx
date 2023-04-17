import Link from 'next/link'
import React, { FC, useRef, useState } from 'react'

import { Button } from 'components/Button/Button'
import ModalWindow from 'components/ModalWindow/ModalWindow'
import Profile from 'components/Profile/Profile'

import { bell, logo, magnifyingGlass, paple } from 'img/imges'

import styles from './Header.module.scss'
import ListCategories from './ListСategories/ListСategories'

const Header: FC = () => {
  const isAuth = false
  const [isHovering, setIsHovering] = useState(false)
  const [isVariant, setVariant] = useState('')

  const handleMouseOver = (value: string) => {
    setIsHovering(true)
    setVariant(value)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  const renderComponentListCategory = () => {
    switch (isVariant) {
      case 'movies':
        return <ListCategories children={isVariant} variant={isVariant} />
      case 'series':
        return <ListCategories children={isVariant} variant={isVariant} />
      case 'animation':
        return <ListCategories children={isVariant} variant={isVariant} />
      case 'tvplus':
        return <ListCategories children={isVariant} variant={isVariant} />
      case 'profile':
        return <ListCategories children={<Profile />} variant={isVariant} />
      case 'bell':
        return <ListCategories children={isVariant} variant={isVariant} />
      default:
        return <ListCategories children={''} variant={isVariant} />
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__t}>
        <Link href='/' onMouseOver={handleMouseOut}>
          <img src={logo.src} alt='logo' />
        </Link>
        <nav className={styles.nav}>
          <Link href='/' onMouseOver={handleMouseOut}>
            Мой Иви
          </Link>
          <Link href='/new' onMouseOver={handleMouseOut}>
            Что нового
          </Link>
          <Link href='/MoviesPage' onMouseOver={() => handleMouseOver('movies')}>
            Фильмы
          </Link>
          <Link href='/series' onMouseOver={() => handleMouseOver('series')}>
            Сериалы
          </Link>
          <Link href='/animation' onMouseOver={() => handleMouseOver('animation')}>
            Мультфильмы
          </Link>
          <Link href='/tvplus' onMouseOver={() => handleMouseOver('tvplus')}>
            TV+
          </Link>
        </nav>
      </div>
      <div className={styles.header__b}>
        <Button color='gradient' children='Оплатить подписку' onMouseOver={handleMouseOut} />
        <Button img={magnifyingGlass.src} children={<h3 className={styles.color}>Поиск</h3>} onMouseOver={handleMouseOut} />
        {isAuth ? <Button img={bell.src} onMouseOver={() => handleMouseOver('bell')} /> : <Button img={bell.src} onMouseOver={() => handleMouseOver('')} />}
        <Button className={styles.costom_btn} img={paple.src} onMouseOver={() => handleMouseOver('profile')} />
      </div>
      {isHovering && <ModalWindow onMouseLeave={handleMouseOut} children={renderComponentListCategory()} />}
    </header>
  )
}

export default Header
