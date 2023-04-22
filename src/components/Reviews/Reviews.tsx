import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';



import styles from './Reviews.module.scss';
import Review from './Rewiew/Review';
import useWindowSize from './widthWindow';
import { Button } from '@/src/components/Button/Button';
import { IReviews } from '@/src/types/CommentsType';


interface ReviewsProps {
  items: IReviews[]
  btn: string
  titleBtn: string
  aboutTheFilm?: string
  movieId: number
}

const Reviews: FC<ReviewsProps> = ({ titleBtn, items, btn, aboutTheFilm, movieId }) => {
  const [comment, setComment] = useState<IReviews[]>()
  // const [comment2, setComment2] =useState()

  console.log(comment)
  // console.log(comment2)

  useEffect(() => {
    if (items) {
      setComment(items)
    } else {
      fetch(`http://localhost:3004/comments/${movieId}/tree`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(json => setComment(json))
        .catch(err => console.log(err))
    }
  }, [])
  // useEffect(() => {
  //   fetch(`http://localhost:3004/comments/1/flat `, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(json => setComment2(json))
  //     .catch(err => console.log(err))
  // }, [])

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
        <Swiper navigation modules={[Navigation]} freeMode={true} spaceBetween={20} slidesPerView={useWindowSize('reviews')}>
          {comment ? (
            comment.map((feedback: any, i: number) => (
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