import { changeLanguage } from 'i18next'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import AdminPage from '../AdminPage/AdminPage'
import PersonPage from '../PersonPage/PersonPage'

import Index from '@/pages/movies'

const HomePage: FC = () => {
  const { t, i18n } = useTranslation()

  return (
    <div>
      <AdminPage />
      <PersonPage />
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <h1>{t('Welcome to React')}</h1>
      <Index />
    </div>
  )
}

export default HomePage
