import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/Button/Button'

const HomePage: FC = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <div >
      <Button color='icon'></Button>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <h1>{t('Welcome to React')}</h1>
    </div>
  )
}

export default HomePage
