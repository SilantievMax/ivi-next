import React, { FC, useState } from 'react'
import styles from '@/src/components/screens/AdminPage/AdminPage.module.scss'
import { TextField } from '@mui/material'
import { Button } from '../../../Button/Button'
import { IFilm, IGenre } from '@/src/types/types'
import { MoviesService } from '@/src/services/movies.service'

const ModalMovie:FC = () => {
  const [value, setValue] = useState<string>()
  const [valueRu, setValueRu] = useState<string>('')
  const [valueEn, setValueEn] = useState<string>('')
  const [data, setData] = useState<IFilm>({} as IFilm)

  const searchById = () => {
    MoviesService.getMovieById(value).then(film => {
      setValueRu(film.nameRu)
      setValueEn(film.nameEn)
      setData(film)
    })
  }

  const handleMovieChange = (film: IGenre) => {
    MoviesService.putFilm(film)
  }

  return (
    <div className={styles.modalGenreContainer}>
      <div className={styles.modalMovieContainer}>
        <span>Введите id фильма:</span>
        <TextField value={value}
                   onChange={(e) => setValue(e.target.value)}
                   variant='outlined'
                   className={styles.inputText}/>
        <Button onClick={() => {
          searchById()
        }} size='border'>Найти фильм</Button>
      </div>
      {data.nameRu ?
        <div>
          <span>{`Фильм: ${data.nameRu}`}</span>
          <div className={styles.inputContainer}>
            <span>nameRu</span>
            <TextField value={valueRu}
                       onChange={(e) => setValueRu(e.target.value)}
                       variant='outlined'
                       className={styles.inputText}/>
          </div>
          <div className={styles.inputContainer}>
            <span>nameEn</span>
            <TextField value={valueEn}
                       onChange={(e) => setValueEn(e.target.value)}
                       variant='outlined'
                       className={styles.inputText}/>
          </div>
          <Button onClick={() => handleMovieChange({
            id: data.id,
            nameRu: valueRu,
            nameEn: valueEn
          })} size='smart'>Отправить</Button>
        </div>
        : ''}
    </div>
  )
}

export default ModalMovie