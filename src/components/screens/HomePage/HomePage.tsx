import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';



import { feedback, review } from '../../Reviews/props/props';
import AdminPage from '../AdminPage/AdminPage';
import MoviesPage from '../Movies/MoviesPage';
import PersonPage from '../PersonPage/PersonPage';



import { Button } from '@/src/components/Button/Button';
import Reviews from '@/src/components/Reviews/Reviews';
import Index from '@/pages/movies'
import { changeLanguage } from 'i18next'


const HomePage: FC = () => {
  const { t, i18n } = useTranslation()


  return (
    <div>
    <AdminPage/>
    <PersonPage/>
     <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <h1>{t('Welcome to React')}</h1>
      <Index/>
    </div>
  )
}

export default HomePage
