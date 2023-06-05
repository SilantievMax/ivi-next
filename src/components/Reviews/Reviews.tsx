import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import styles from './Reviews.module.scss'
import Review from './Rewiew/Review'
import { Button } from '@/src/components/Button/Button'
import { IReviews } from '@/src/types/CommentsType'
import Slider from 'react-slick'
import LeftArrow from '@/src/components/Arrows/LeftArrow'
import RightArrow from '@/src/components/Arrows/RightArrow'

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

  let settings = {
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    speed: 500,
    infinite: true,
    variableWidth: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

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
        <Slider {...settings}>
          {reviews ? (
            reviews.map((feedback: any) => (
              <div key={feedback.id}>
                <Review rewiew={feedback} />
              </div>
            ))
          ) : (
            <Review />
          )}
        </Slider>
      </div>
      <Link href='#*' className={styles.comments_btn_mobile}>
        <Button size='border' children='Оставить отзывы' />
      </Link>
    </section>
  )
}

export default Reviews
