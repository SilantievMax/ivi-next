import i18n, { changeLanguage } from 'i18next'
import Link from 'next/link'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import LanguageBtn from '../LanguageBtn/LanguageBtn'

import styles from './Header.module.scss'
import ListCategories from './ListСategories/ListСategories'
import { Button } from '@/src/components/Button/Button'
import ModalWindow from '@/src/components/ModalWindow/ModalWindow'
import Profile from '@/src/components/Profile/Profile'
import { lngs } from '@/src/i18next/lngs'
import { bell, logo, magnifyingGlass, paple } from '@/src/img/imges'

const Header: FC = () => {
  const isAuth = false
  const [isHovering, setIsHovering] = useState(false)
  const [isVariant, setVariant] = useState('')
  const { t, i18n } = useTranslation()
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }
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
        <LanguageBtn />
        <Link href='/' onMouseOver={handleMouseOut}>
          <img src={logo.src} alt='logo' />
        </Link>
        <nav className={styles.nav}>
          <Link href='/' onMouseOver={handleMouseOut}>
            {t('myIvi')}
          </Link>
          <Link href='/new' onMouseOver={handleMouseOut}>
            {t('whatNew')}
          </Link>
          <Link href='/movies' onMouseOver={() => handleMouseOver('movies')}>
            {t('movies')}
          </Link>
          <Link href='/series' onMouseOver={() => handleMouseOver('series')}>
            {t('serials')}
          </Link>
          <Link href='/animation' onMouseOver={() => handleMouseOver('animation')}>
            {t('cartoons')}
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
      <div></div>
    </header>
  )
}

export default Header
