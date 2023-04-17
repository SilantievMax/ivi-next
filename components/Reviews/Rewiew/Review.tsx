import Link from 'next/link'
import React from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'

import styles from './Review.module.scss'
import VoteBtns from '@/components/VoteBtns/VoteBtns'

const Review = (props: any) => {
  const { name, description, date, vote, title } = props.rewiew

  return (
    <>
      {props.rewiew ? (
        <div className={styles.review}>
          <Link href={{ pathname: './comment/1', query: { props: props.rewiew } }}>
            <div className={styles.name}>{name}</div>
            {props.rewiew.title ? <h3 className={styles.title}>{title.length >= 57 ? title.slice(0, 57) + ' ...' : title}</h3> : ''}
            <p className={styles.description}>{description.length >= 70 ? description.slice(0, 70) + ' ...' : description}</p>
            <div className={styles.footer}>
              <div className={styles.date}>
                <p>{date}</p>
              </div>
              <VoteBtns votes={vote} />
            </div>
          </Link>
        </div>
      ) : (
        <div className={styles.notReview}>
          <p className={styles.notText}>Ничего не написано</p>
        </div>
      )}
    </>
  )
}

export default Review
