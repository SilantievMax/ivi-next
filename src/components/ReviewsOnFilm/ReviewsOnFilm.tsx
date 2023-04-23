import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { Button } from '../Button/Button'

import FormReview from './FormReview/FormReview'
import CommentList from './ReviewsList/ReviewsList'
import styles from './ReviewsOnFilm.module.scss'
import { useOuside } from '@/src/hooks/useOutside'
import { selectPickedMovie } from '@/src/store/reducers/dataBaseReducer'
import { IReviews } from '@/src/types/CommentsType'

const ReviewsOnFilm = () => {
  const pickedFilm = useSelector(selectPickedMovie)
  console.log(pickedFilm)
  const { ref, isShow, setIsShow } = useOuside(false)
  const [comment, setComment] = useState<IReviews[]>()
  const {
    back,
    query: { id }
  } = useRouter()
  // console.log(comment);

  useEffect(() => {
      fetch(`http://localhost:3004/comments/${id}/tree`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setComment(json))
      .catch(err => console.log(err))
    // }
  }, [])

  return (
    <div className={styles.conteiner}>
      <div className={styles.conteiner__wrapper}>
        <div className={styles.btnGoBack}>
          <Button onClick={() => back()} size='iconGoBack' icon={<MdArrowBackIosNew size={25} />} children='К фильму' />
        </div>
        <div className={styles.coments}>
          <h2 className={styles.title}>{pickedFilm.nameRu}</h2>
          <div>
            <Button size='reviews' children='Рецензии' quantity={comment?.length} />
          </div>
          <div ref={ref} className={styles.coments_btn}>
            {isShow ? (
              <FormReview idReview={null} setShow={setIsShow} formName='Review' movieId={id} />
            ) : (
              <Button size='border' children='Написать рецензию' onClick={() => setIsShow(true)} />
            )}
            <ul className={styles.commentList}>{comment?.length && comment.map((comment, i) => <CommentList key={i} comment={comment} />)}</ul>
          </div>
        </div>
        <div className={styles.movie}>Карточка фильма!</div>
      </div>
    </div>
  )
}

export default ReviewsOnFilm
