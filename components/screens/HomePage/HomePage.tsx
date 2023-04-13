<<<<<<< HEAD
import React, { FC } from 'react';

// import { Button } from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';
=======
import React, { FC } from 'react'
// import { Button } from '@/components/Button/Button';
import { useTranslation } from 'react-i18next'
>>>>>>> silantievmax

const HomePage: FC = () => {
  const { t, i18n } = useTranslation()


  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <h1>{t('Welcome to React')}</h1>
    </div>
  )
}

export default HomePage
