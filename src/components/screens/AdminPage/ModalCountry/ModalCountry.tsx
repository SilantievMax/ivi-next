import React, { FC, useEffect, useState } from 'react'
import styles from '@/src/components/screens/AdminPage/AdminPage.module.scss'
import { capitalize, TextField } from '@mui/material'
import { Button } from '@/src/components/Button/Button'
import { IGenre } from '@/src/types/types'
import { MoviesService } from '@/src/services/movies.service'
import { sortData } from '@/src/globalData/globalData'

const ModalCountry: FC = () => {
  const [countries, setCountries] = useState<IGenre[]>([])
  const [showChangeWindow, setShowChangeWindow] = useState<boolean>(false)
  const [nameRuValue, setNameRuValue] = useState<string>('')
  const [nameEnValue, setNameEnValue] = useState<string>('')
  const [pickedGenre, setPickedGenre] = useState<number>(0)
  useEffect(() => {
    MoviesService.getCountries().then((data) => setCountries(data.sort(sortData('id')))).catch(err => console.log(err))
  }, [])

  const handleGenreChange = (country: IGenre) => {
    MoviesService.putCountries(country)
  }

  return <div className={styles.modalGenreContainer}>
    <div className={styles.genresBox}>
      {countries.map((el, idx) => <div key={idx} className={styles.genresContainer}>
        <span className={styles.genreText}>{capitalize(el.nameRu)}</span>
        <Button size='border' onClick={() => {
          setShowChangeWindow(true)
          setPickedGenre(el.id)
          setNameRuValue(el.nameRu)
          setNameEnValue(el.nameEn)
        }}>Изменить</Button>
      </div>)}
    </div>
    {showChangeWindow ?
      <div>
        <div className={styles.inputContainer}>
          <span>Country: nameRu</span>
          <TextField value={nameRuValue}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameRuValue(e.target.value)}
                     variant='outlined'
                     className={styles.inputText}/>
        </div>
        <div className={styles.inputContainer}>
          <span>Country: nameEn</span>
          <TextField value={nameEnValue}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameEnValue(e.target.value)}
                     variant='outlined'
                     className={styles.inputText}/>
        </div>

        <Button onClick={() => {
          setShowChangeWindow(false)
          handleGenreChange({
            id: pickedGenre,
            nameRu: nameRuValue,
            nameEn: nameEnValue
          })
        }} size='smart'>Отправить</Button>
      </div>
      : ''}
  </div>
}

export default ModalCountry