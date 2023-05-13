import Link from 'next/link'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import LanguageBtn from '../LanguageBtn/LanguageBtn'

import styles from './Header.module.scss'
import ListCategories from './ListСategories/ListСategories'
import { Button } from '@/src/components/Button/Button'
import ModalWindow from '@/src/components/ModalWindow/ModalWindow'
import Profile from '@/src/components/Profile/Profile'
import { bell, logo, magnifyingGlass, paple } from '@/src/img/imges'
import FilterItem from '@/src/components/Filter/FilterItem'
import HeaderCategory from '@/src/components/HeaderCategory/HeaderCategory'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import { slide as Menu } from 'react-burger-menu'
const Header: FC = () => {
  const isAuth = false
  const [isHovering, setIsHovering] = useState(false)
  const [active, setActive] = useState(false)
  const [isVariant, setVariant] = useState('')
  const { t } = useTranslation()

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
        return <ListCategories children={<HeaderCategory/>} variant={isVariant} />
      case 'series':
        return <ListCategories children={<HeaderCategory/>} variant={isVariant} />
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
        {active ? <RxCross1 onClick={() => setActive(false)} className={styles.burgerIcon}/> : <RxHamburgerMenu onClick={() => setActive(true)} className={styles.burgerIcon} />}
        {/*<LanguageBtn />*/}
        <Link className={styles.headerLogo} href='/' onMouseOver={handleMouseOut}>
          <img src={logo.src} alt='logo' />
        </Link>
        {active ? <div className={styles.overlay} onClick={() => setActive(false)}></div> : ''}
        <nav className={styles.headerNav}>
          <div className={active ? `${styles.navWrapper} ${styles.active}` : `${styles.navWrapper}`}>
            <Link onClick={() => setActive(false)} href='/' onMouseOver={handleMouseOut}>
              {t('myIvi')}
            </Link>
            <Link onClick={() => setActive(false)} href='https://www.ivi.ru/new' onMouseOver={handleMouseOut}>
              {t('whatNew')}
            </Link>
            <Link onClick={() => setActive(false)} href='/movies' onMouseOver={() => handleMouseOver('movies')}>
              {t('movies')}
            </Link>
            <Link onClick={() => setActive(false)} href='/movies' onMouseOver={() => handleMouseOver('series')}>
              {t('serials')}
            </Link>
            <Link onClick={() => setActive(false)} href='https://www.ivi.ru/animation' onMouseOver={handleMouseOut}>
              {t('cartoons')}
            </Link>
            <Link onClick={() => setActive(false)} href='https://www.ivi.ru/tvplus' onMouseOver={handleMouseOut}>
              TV+
            </Link>
          </div>

        </nav>
      </div>
      <div className={styles.header__b}>
        <Button color='gradient' children={t('buySubscribe')} onMouseOver={handleMouseOut} />
        <Button img={magnifyingGlass.src} children={<h3 className={styles.color}>{t('search')}</h3>} onMouseOver={handleMouseOut} />
        {isAuth ? <Button img={bell.src} onMouseOver={() => handleMouseOver('bell')} /> : <Button img={bell.src} onMouseOver={() => handleMouseOver('')} />}
        <Button className={styles.custom_btn} img={paple.src} onMouseOver={() => handleMouseOver('profile')} />
      </div>
      {isHovering && <ModalWindow onMouseLeave={handleMouseOut} children={renderComponentListCategory()} />}
      <div></div>
    </header>
  )
}

export default Header
