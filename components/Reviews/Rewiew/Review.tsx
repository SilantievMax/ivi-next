import Link from 'next/link'
import React from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'

import style from './Review.module.scss'

const Review = (props: any) => {
  return (
    <div className={style.review}>
      <Link href={''}>
        <div className={style.name}>{props.rewiew.name}</div>
        {props.rewiew.title ? <h3 className={style.title}>{props.rewiew.title.length >= 57 ? props.rewiew.title.slice(0, 57) + ' ...' : props.rewiew.title}</h3> : ''}
        <p className={style.description}>{props.rewiew.description.length >= 100 ? props.rewiew.description.slice(0, 100) + ' ...' : props.rewiew.description}</p>
        <div className={style.footer}>
          <div className={style.date}>
            <p>{props.rewiew.date}</p>
          </div>
          <div className={style.voteBtns}>
            <div className={style.like}>
              <BiLike className={style.likei} />
            </div>
            <div className={style.vote}>{props.rewiew.vote}</div>
            <div className={style.like}>
              <BiDislike className={style.likei} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Review
