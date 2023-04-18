import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'


import styles from './Reviews.module.scss'
import Review from './Rewiew/Review'
import useWindowSize from './widthWindow'
import { Button } from '../Button/Button'

interface IReviews {
  items: any
  btn: string
  titleBtn: string
  aboutTheFilm?: string
}

const Reviews: FC<IReviews> = ({ titleBtn, items, btn, aboutTheFilm }) => {
  return (
    <section className={styles.reviews}>
      <header className={styles.header}>
        <div className={styles.header_item}>
          <Link href='/comment/1'>
            <Button size='reviews' children={titleBtn} quantity={12} />
            {aboutTheFilm && <p>{aboutTheFilm}</p>}
          </Link>
        </div>
        <Link href='#*' className={styles.comments_btn}>
          <Button size='border' children={btn} />
        </Link>
      </header>
      <div className={styles.gallery}>
        <Swiper navigation modules={[Navigation]} freeMode={true} spaceBetween={20} slidesPerView={useWindowSize()}>
          {items ? (
            items.map((feedback: any, i: number) => (
              <SwiperSlide key={feedback.id}>
                <Review rewiew={feedback} />
              </SwiperSlide>
            ))
          ) : (
            <Review />
          )}
        </Swiper>
      </div>
      <Link href='#*' className={styles.comments_btn_mobile}>
        <Button size='border' children='Оставить отзывы' />
      </Link>
    </section>
  )
}

export default Reviews
