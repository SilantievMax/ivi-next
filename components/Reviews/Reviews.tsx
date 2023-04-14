import React, { FC, useEffect, useState } from 'react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '../Button/Button'
import ReviewBtn from '../ReviewBtn/ReviewBtn'

import style from './Reviews.module.scss'
import Review from './Rewiew/Review'
import useWindowSize from './widthWindow'

interface IReviews {
  items: any
  btn: string
  titleBtn: string
  aboutTheFilm?: string
}

const Reviews: FC<IReviews> = ({ titleBtn, items, btn, aboutTheFilm }) => {
  return (
    <>
      <section className={style.reviews}>
        <header className={style.header}>
          <div className={style.header_item}>
            <ReviewBtn quantity={12} children={titleBtn} />
            {aboutTheFilm && <p>{aboutTheFilm}</p>}
          </div>
          <a href='#*' className={style.comments_btn}>
            <Button size='border' children={btn} />
          </a>
        </header>
        <div className={style.gallery}>
          <Swiper navigation modules={[Navigation]} freeMode={true} spaceBetween={20} slidesPerView={useWindowSize() < 600 ? 1 : 2}>
            {items.map((feedback: any, i: number) => (
              <>
                <SwiperSlide key={i}>
                  <Review rewiew={feedback} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
        <a href='#*' className={style.comments_btn_mobile}>
          <Button size='border' children='Оставить отзывы' />
        </a>
      </section>
    </>
  )
}

export default Reviews
