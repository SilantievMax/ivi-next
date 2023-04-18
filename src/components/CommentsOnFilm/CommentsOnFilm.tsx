import React, { useContext, useEffect, useState } from 'react'


import Comment from './Comment/Comment'
import CommentList from './Comment/CommentList'
import styles from './CommentsOnFilm.module.scss'
import { commentsProps } from './props'
import { Button } from '../Button/Button'

const CommentsOnFilm = () => {
  const [show, setShow] = useState(true)
  const [disable, setDisable] = useState(true)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (value.length > 10) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [value])

  return (
    <div className={styles.conteiner}>
      <div className={styles.coments}>
        <h2 className={styles.title}>Название фильма</h2>
        <div className={styles.comentBtn}>
          <Button size='reviews' children='Отзывы' quantity={12} />
        </div>
        <div>
          {show ? (
            <form className={styles.form} action=''>
              <div className={styles.form__input}>
                <input className={styles.form__input_input} type='text' value={value} onChange={e => setValue(e.target.value)} />
                <label className={styles.form__input_lable}>Написать отзыв</label>
              </div>
              <div className={styles.form__buttons}>
                <div>
                  <Button size='border' children='Отменить' onClick={() => setShow(false)} />
                </div>
                <div>
                  <Button color='red' children='Отправить' disable={disable} />
                </div>
              </div>
            </form>
          ) : (
            <Button size='border' children='Написать отзыв' onClick={() => setShow(true)} />
          )}
          <ul className={styles.commentList}>{commentsProps && commentsProps.map(comment => <CommentList comment={comment} />)}</ul>
        </div>
      </div>
      <div className={styles.movie}>Карточка фильма!</div>
    </div>
  )
}

export default CommentsOnFilm
