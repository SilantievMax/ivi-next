import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';



import { Button } from '../Button/Button';



import FormReview from './FormReview/FormReview';
import Comment from './ReviewsList/ReviewsItem';
import CommentList from './ReviewsList/ReviewsList';
import styles from './ReviewsOnFilm.module.scss';
import { commentsProps } from './props';
import { IReviews } from '@/src/types/CommentsType';


const ReviewsOnFilm = () => {
  const [show, setShow] = useState(false)
  // const [disable, setDisable] = useState(true)
  // const [value, setValue] = useState('')
  // const [textarea, setTextarea] = useState('')
  const [comment, setComment] = useState<IReviews[]>()
  // const [movie, setMovie] = useState<IReviews[]>()
  // const {name} = comment
  const {
    back,
    query: { id = 1 }
  } = useRouter()
  // console.log(comment);

  useEffect(() => {
    // if (items) {
    //   setComment(items)
    // } else {

    // fetch(`http://localhost:3004/movies/${id}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(res => res.json())
    //   .then(json => setMovie(json))
    //   .catch(err => console.log(err))

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
          <h2 className={styles.title}>{ 'Название фильма'}</h2>
          <div className={styles.comentBtn}>
            <Button size='reviews' children='Рецензии' quantity={12} />
          </div>
          <div>
            {show ? (
              <FormReview idReview={null} setShow={setShow} formName='Review' movieId={id} />
            ) : (
              <Button size='border' children='Написать рецензию' onClick={() => setShow(true)} />
            )}
            <ul className={styles.commentList}>{comment && comment.map((comment, i) => <CommentList key={i} comment={comment} />)}</ul>
          </div>
        </div>
        <div className={styles.movie}>Карточка фильма!</div>
      </div>
    </div>
  )
}

export default ReviewsOnFilm