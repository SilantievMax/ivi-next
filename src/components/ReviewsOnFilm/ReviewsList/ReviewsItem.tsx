import React, { useEffect, useState } from 'react'

import FormReview from '../FormReview/FormReview'

import styles from './ReviewsItem.module.scss'
import { Button } from '@/src/components/Button/Button'
import VoteBtns from '@/src/components/VoteBtns/VoteBtns'
import { useOuside } from '@/src/hooks/useOutside'
import { IReviews } from '@/src/types/CommentsType'

interface CommentProps {
  comment: IReviews
}

const Comment = ({ comment }: CommentProps) => {
  const { movieId } = comment
  const [showReview, setShowReview] = useState(false)
  const { author, date, description, id, title} = comment || {}
  const { ref, isShow, setIsShow } = useOuside(false)
  return (
    <li className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_content}>
          <div className={styles.header_content}>
            <h3 className={styles.name}>{author}</h3>
            <div className={styles.date}>{date.slice(0, 10)}</div>
          </div>
          <VoteBtns votes={12} />
        </div>
        <h3 className={styles.title}>{title}</h3>
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
      <div className={styles.button}>{!isShow && <Button size='border' children='Ответить' onClick={() => setIsShow(true)} />}</div>
      <div ref={ref}>{isShow && <FormReview movieId={movieId} setShow={setIsShow} formName={'Comment'} idReview={id} />}</div>
    </li>
  )
}

export default Comment
