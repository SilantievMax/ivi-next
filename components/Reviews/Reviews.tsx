import React from 'react'

import { Button } from '../Button/Button'
import ReviewBtn from '../ReviewBtn/ReviewBtn'

import style from './Reviews.module.scss'

const Reviews = () => {
  return (
    <section>
      <header className={style.reviews}>
        <div>
          <ReviewBtn quantity={12} children='Отзывы' />
          <p>о фильме ... </p>
        </div>
        <a href='#*' className={style.comments_btn}>
          <Button size='border' children='Оставить отзывы' />
        </a>
      </header>
      <div className={style.gallery}></div>
      <a href='#*' className={style.comments_btn_mobile}>
        <Button size='border' children='Оставить отзывы' />
      </a>
    </section>
  )
}

export default Reviews
