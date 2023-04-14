import React, { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';



import { Button } from '../Button/Button';
import Carousel from '../Carousel/Carousel';
import ReviewBtn from '../ReviewBtn/ReviewBtn';



import style from './Reviews.module.scss';
import Review from './Rewiew/Review';
import useWindowDimensions from './widthWindow';
import useWindowSize from './widthWindow';


interface IReviews {
  size: 'small' | 'standard'
  items: any
  transition: number
  btn: string
  aboutTheFilm?: string
}

const Reviews = ({ size, items, transition, btn, aboutTheFilm }: IReviews) => {

  // const [ wind, setWind] = useState(1)
// if (useWindowDimensions() > 500){

// } useWindowDimensions()
console.log(useWindowSize())

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
          <Swiper freeMode={true} spaceBetween={10} slidesPerView={useWindowSize() < 600 ? 1 : 2} onSlideChange={() => console.log('slide change')} onSwiper={swiper => console.log(swiper)}>
            {items.map((feedback: any, i: number) => (
              <>
                <SwiperSlide key={i}>
                  <Review rewiew={feedback} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
          {/* <Carousel
            items={items.map((feedback: any, i: number) => (
              <Review key={i} rewiew={feedback} />
            ))}
            size={size}
            transition={transition}
            className={style.standardCarouselItems}
          ></Carousel> */}
        </div>
        <a href='#*' className={style.comments_btn_mobile}>
          <Button size='border' children='Оставить отзывы' />
        </a>
      </section>
    </>
  )
}

export default Reviews