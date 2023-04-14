import React from 'react';



import { Button } from '../Button/Button';
import Carousel from '../Carousel/Carousel';
import ReviewBtn from '../ReviewBtn/ReviewBtn';



import style from './Reviews.module.scss';
import Review from './Rewiew/Review';


interface IReviews {
  size: 'small' | 'standard'
  items: any
  transition: number
  btn: string
  aboutTheFilm?: string
}

const Reviews = ({ size, items, transition, btn, aboutTheFilm }: IReviews) => {
  return (
    <>
      <section className={style.reviews}>
        <header className={style.header}>
          <div className={style.header_item}>
            <ReviewBtn quantity={12} children='Отзывы' />
            {aboutTheFilm && <p>{aboutTheFilm}</p>}
          </div>
          <a href='#*' className={style.comments_btn}>
            <Button size='border' children={btn} />
          </a>
        </header>
        <div className={style.gallery}>
          <Carousel
            items={items.map((feedback: any, i: number) => (
              <Review key={i} rewiew={feedback} />
            ))}
            size={size}
            transition={transition}
            className='standard-carousel-items'
          ></Carousel>
        </div>
        <a href='#*' className={style.comments_btn_mobile}>
          <Button size='border' children='Оставить отзывы' />
        </a>
      </section>
    </>
  )
}

export default Reviews