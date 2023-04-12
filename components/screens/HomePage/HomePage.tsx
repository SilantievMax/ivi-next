import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosMail } from 'react-icons/io'
import { Button } from '@/components/Button/Button';


const HomePage: FC = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <div style={{display: "flex", gap:"10px", alignItems:"center", justifyContent:"center" }}>
      <Button size='img' img={"https://thumbs.dfs.ivi.ru/storage39/contents/5/6/c5ea4a7d4f5b1b4597d1e3d221ad97.jpg/44x44/?q=85"}></Button>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <h1>{t('Welcome to React')}</h1>
    </div>
  )
}

export default HomePage