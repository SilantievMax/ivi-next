import React, { FC, useEffect, useState } from 'react'
import { MoviesService } from '@/src/services/movies.service'
import { IGenre } from '@/src/types/types'
import { capitalize, TextField } from '@mui/material'
import styles from '../AdminPage.module.scss'
import { Button } from '../../../Button/Button'
import { sortData } from '@/src/globalData/globalData'

const ModalGenre: FC = () => {
  const [genres, setGenres] = useState<IGenre[]>([])
  const [showChangeWindow, setShowChangeWindow] = useState<boolean>(false)
  const [nameRuValue, setNameRuValue] = useState<string>('')
  const [nameEnValue, setNameEnValue] = useState<string>('')
  const [pickedGenre, setPickedGenre] = useState<number>(0)
  useEffect(() => {
    MoviesService.getGenres().then((data) => setGenres(data.sort(sortData('id')))).catch(err => console.log(err))
  }, [])

  const handleGenreChange = (genre: IGenre) => {
    MoviesService.putGenres(genre)
  }

  return <div className={styles.modalGenreContainer}>
    <div className={styles.genresBox}>
      {genres.map((el, idx) => <div key={idx} className={styles.genresContainer}>
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
          <span>nameRu</span>
          <TextField value={nameRuValue}
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameRuValue(e.target.value)}
                     variant='outlined'
                     className={styles.inputText}/>
        </div>
        <div className={styles.inputContainer}>
          <span>nameEn</span>
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

export default ModalGenre