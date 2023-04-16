import React, { FC, useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';



import { Button } from '../Button/Button';



import style from './Reviews.module.scss';
import Review from './Rewiew/Review';
import useWindowSize from './widthWindow';


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
            <Button size='reviews' children={titleBtn} quantity={12}/>
            {aboutTheFilm && <p>{aboutTheFilm}</p>}
          </div>
          <a href='#*' className={style.comments_btn}>
            <Button size='border' children={btn} />
          </a>
        </header>
        <div className={style.gallery}>
          <Swiper navigation modules={[Navigation]} freeMode={true} spaceBetween={20} slidesPerView={useWindowSize()}>
            {items ? items.map((feedback: any, i: number) => (
                <SwiperSlide key={feedback.id}>
                  <Review rewiew={feedback} />
                </SwiperSlide>         
            )) : <Review  />}
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