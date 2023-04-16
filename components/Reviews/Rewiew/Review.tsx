import Link from 'next/link';
import React from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import style from './Review.module.scss';

const Review = (props: any) => {
 const { name, description, date, vote, title } = props.rewiew
  
  return (
    <>
      {props.rewiew ? (
        <div className={style.review}>
          <Link href={''}>
            <div className={style.name}>{name}</div>
            {props.rewiew.title ? <h3 className={style.title}>{title.length >= 57 ? title.slice(0, 57) + ' ...' : title}</h3> : ''}
            <p className={style.description}>{description.length >= 70 ? description.slice(0, 70) + ' ...' : description}</p>
            <div className={style.footer}>
              <div className={style.date}>
                <p>{date}</p>
              </div>
              <div className={style.voteBtns}>
                <div className={style.like}>
                  <BiLike className={style.likei} />
                </div>
                <div className={style.vote}>{vote}</div>
                <div className={style.like}>
                  <BiDislike className={style.likei} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className={style.notReview}>
          <p className={style.notText}>Ничего не написано</p>
        </div>
      )}
    </>
  )
}

export default Review