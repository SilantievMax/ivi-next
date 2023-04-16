import Link from 'next/link'
import React, { FC, useRef, useState } from 'react'

import { Button } from 'components/Button/Button'
import ModalWindow from 'components/ModalWindow/ModalWindow'

import { bell, logo, magnifyingGlass, paple } from 'img/imges'

import styles from './Header.module.scss'

const Header: FC = () => {
  const [isHovering, setIsHovering] = useState(true)
  const [isVariant, setVariant] = useState('')

  const handleMouseOver = (value: string) => {
    setIsHovering(true)
    setVariant(value)
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
          <Link href='/movies' onMouseOver={() => handleMouseOver('movies')}>
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
        <Button img={bell.src} onMouseOver={() => handleMouseOver('bell')} />
        <Button className={styles.costom_btn} img={paple.src} onMouseOver={() => handleMouseOver('paple')} />
      </div>
      {isHovering && <ModalWindow onMouseLeave={handleMouseOut} children={<h1>{isVariant}</h1>} />}
    </header>
  )
}

export default Header
