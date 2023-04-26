import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '../Button/Button'

const LanguageBtn = () => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('')

  useEffect(() => {
    if (language) {
      localStorage.setItem('language', language)
      i18n.changeLanguage(language)
    } else {
      setLanguage(String(localStorage.getItem('language')))
    }
  }, [language])
  return (
    <>
      <Button color='gray' size='circle' onClick={() => setLanguage(language === 'ru' ? 'en' : language === 'en' ? 'ru' : 'ru')} children={language === 'ru' ? 'Ru' : 'En'} />
    </>
  )
}

export default LanguageBtn
