import React, { useEffect, useState } from 'react';



import FormReview from '../FormReview/FormReview';



import styles from './ReviewsItem.module.scss';
import { Button } from '@/src/components/Button/Button';
import VoteBtns from '@/src/components/VoteBtns/VoteBtns';
import { IReviews } from '@/src/types/CommentsType';


interface CommentProps {
  comment: IReviews
}

const Comment = ({ comment }: CommentProps) => {
  const {movieId} = comment
  const [showReview, setShowReview] = useState(false)
  const [showComment, setShowComment] = useState(false)
  const { author, createdAt, date, description, id, title, type, updatedAt, userId } = comment || {}

  return (
    <li className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header}>
          <h3 className={styles.name}>{author}</h3>
          <p>{title}</p>
          <div className={styles.date}>{date.slice(0, 10)}</div>
        </div>
        <VoteBtns votes={12} />
      </header>
      <div className={styles.comment}>
        {description.length >= 130 ? (
          <>
            {!showReview ? (
              <>
                <p> {description && description.length >= 130 ? description.slice(0, 130) + ' ...' : description}</p>{' '}
                <div className={styles.buttonText}>
                  <Button size='comment' onClick={() => setShowReview(true)} children='Развернуть' />
                </div>{' '}
              </>
            ) : (
              <>
                <p>{description}</p>{' '}
                <div className={styles.buttonText}>
                  <Button size='comment' onClick={() => setShowReview(false)} children='Свернуть' />
                </div>{' '}
              </>
            )}
          </>
        ) : (
          <p> {description}</p>
        )}
      </div>
      <div className={styles.button}>
        {!showComment && <Button size='border' children='Ответить' onClick={() => setShowComment(true)} />}
      </div>
      <div>
        {showComment && <FormReview movieId={movieId} setShow={setShowComment} formName={'Comment'} idReview={id}/>}
      </div>
    </li>
  )
}

export default Comment