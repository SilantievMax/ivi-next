import Link from 'next/link';
import React, { FC } from 'react';



import styles from './Review.module.scss';
import VoteBtns from '@/src/components/VoteBtns/VoteBtns';
import { IReviews } from '@/src/types/CommentsType';


interface ReviewsProps {
  rewiew?: IReviews
}

const Review: FC<ReviewsProps> = ({ rewiew }: ReviewsProps) => {
  const { author, createdAt, date, description, id, movieId, title, type, updatedAt, userId } = rewiew || {}
console.log(movieId)

  return (
    <>
      {rewiew ? (
        // <div className={styles.review}>
        <Link href={{ pathname: `./comment/${movieId}` }} className={styles.review}>
          <div className={styles.name}>{author}</div>
          {title ? <h3 className={styles.title}>{title.length >= 50 ? title.slice(0, 50) + ' ...' : title}</h3> : ''}
          <p className={styles.description}>{description!.length >= 70 ? description!.slice(0, 70) + ' ...' : description}</p>
          <div className={styles.footer}>
            <div className={styles.date}>
              <p>{date!.slice(0, 10)}</p>
            </div>
            <VoteBtns votes='12' />
          </div>
        </Link>
      ) : (
        // </div>
        <div className={styles.notReview}>
          <p className={styles.notText}>Ничего не написано</p>
        </div>
      )}
    </>
  )
}

export default Review