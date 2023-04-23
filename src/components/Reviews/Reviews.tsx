import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './Reviews.module.scss'
import Review from './Rewiew/Review'
import useWindowSize from './widthWindow'
import { Button } from '@/src/components/Button/Button'
import { IReviews } from '@/src/types/CommentsType'

interface ReviewsProps {
  reviews: IReviews[]
  btn: string
  titleBtn: string
  aboutTheFilm?: string
  numberOfReviews: number
}

const Reviews: FC<ReviewsProps> = ({ titleBtn, reviews, btn, aboutTheFilm, numberOfReviews }) => {
  const {
    query: { id }
  } = useRouter()

  return (
    <section className={styles.reviews}>
      <header className={styles.header}>
        <div className={styles.header_item}>
          <Link href={`/movies/comment/${id}`}>
            <Button size='reviews' children={titleBtn} quantity={numberOfReviews} />
          </Link>
          {aboutTheFilm && <p>{aboutTheFilm}</p>}
        </div>
        <Link href={{ pathname: `/movies/comment/${id}` }} className={styles.comments_btn}>
          <Button size='border' children={btn} />
        </Link>
      </header>
      <div className={styles.gallery}>
        <Swiper navigation modules={[Navigation]} freeMode={true} spaceBetween={20} slidesPerView={useWindowSize('reviews')}>
          {reviews ? (
            reviews.map((feedback: any, i: number) => (
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
