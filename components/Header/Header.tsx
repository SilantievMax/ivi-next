import Link from 'next/link'
import React, { FC, useRef, useState } from 'react'

import { Button } from 'components/Button/Button'
import ModalWindow from 'components/ModalWindow/ModalWindow'

import { bell, logo, magnifyingGlass, paple } from 'img/imges'

import styles from './Header.module.scss'

const Header: FC = () => {
  const [isHovering, setIsHovering] = useState(false)
  const refContainer = document.body
  console.log(refContainer)
  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
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
          <Link href='/movies' onMouseOver={handleMouseOver}>
            Фильмы
          </Link>
          <Link href='/series' onMouseOver={handleMouseOver}>
            Сериалы
          </Link>
          <Link href='/animation' onMouseOver={handleMouseOver}>
            Мультфильмы
          </Link>
          <Link href='/tvplus' onMouseOver={handleMouseOver}>
            TV+
          </Link>
        </nav>
      </div>
      <div className={styles.header__b}>
        <Button color='gradient' children='Оплатить подписку' onMouseOver={handleMouseOut} />
        <Button img={magnifyingGlass.src} children={<h3 className={styles.color}>Поиск</h3>} onMouseOver={handleMouseOut} />
        <Button img={bell.src} onMouseOver={handleMouseOver} />
        <Button className={styles.costom_btn} img={paple.src} onMouseOver={handleMouseOver} />
      </div>
      {isHovering && (
        <div onMouseLeave={handleMouseOut}>
          <ModalWindow />
        </div>
      )}
    </header>
  )
}

export default Header
