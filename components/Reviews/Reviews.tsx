import React from 'react'

import { Button } from '../Button/Button'
import Carousel from '../Carousel/Carousel'
import ReviewBtn from '../ReviewBtn/ReviewBtn'

import style from './Reviews.module.scss'
import Review from './Rewiew/Review'

const Reviews = () => {
  const feedback = [
    {
      name: 'Иван Иваныч',
      description: 'Этот фильм входит в десятку моих самых любимых фильмов. Жаль, что такие фильмы уже не снимают и наверно уже никогда не будут снимать.',
      date: '5 января 2020',
      vote: '12'
    },
    {
      name: 'Иван Иваныч',
      description: 'Этот фильм входит в десятку моих самых любимых фильмов. Жаль, что такие фильмы уже не снимают и наверно уже никогда не будут снимать.',
      date: '15 января 2020',
      vote: '2'
    },
    {
      name: 'Иван Иваныч',
      description: 'Этот фильм входит в десятку моих самых любимых фильмов. Жаль, что такие фильмы уже не снимают и наверно уже никогда не будут снимать.',
      date: '5 мая 2020',
      vote: '121'
    },
    {
      name: 'Иван Иваныч',
      description: 'Этот фильм входит в десятку моих самых любимых фильмов. Жаль, что такие фильмы уже не снимают и наверно уже никогда не будут снимать.',
      date: '5 мая 2020',
      vote: '121'
    },
    {
      name: 'Иван Иваныч',
      description: 'Этот фильм входит в десятку моих самых любимых фильмов. Жаль, что такие фильмы уже не снимают и наверно уже никогда не будут снимать.',
      date: '5 мая 2020',
      vote: '121'
    }
  ]
  const review = [
    {
      name: 'Иван Иваныч',
      title: 'Самая лучшая рецензия из всех рецензий. Топ Рецензия. Просто длинный текст для теста загаловка ',
      description: 'Этот фильм входит в десятку моих самых любимых фильмов. Жаль, что такие фильмы уже не снимают и наверно уже никогда не будут снимать.',
      date: '5 января 2020',
      vote: '12'
    },
    {
      name: 'Иван Иваныч',
      title: 'Самая лучшая рецензия из всех рецензий. Топ Рецензия ',
      description: 'Этот фильм входит в десятку моих самых любимых фильмов. Жаль, что такие фильмы уже не снимают и наверно уже никогда не будут снимать.',
      date: '15 января 2020',
      vote: '2'
    },
    {
      name: 'Иван Иваныч',
      title: 'Самая лучшая рецензия из всех рецензий. Топ Рецензия ',
      description: 'Этот фильм входит в десятку моих самых любимых фильмов. Жаль, что такие фильмы уже не снимают и наверно уже никогда не будут снимать.',
      date: '5 мая 2020',
      vote: '121'
    },
    {
      name: 'Иван Иваныч',
      title: 'Самая лучшая рецензия из всех рецензий. Топ Рецензия ',
      description: 'Этот фильм входит в десятку моих самых любимых фильмов. Жаль, что такие фильмы уже не снимают и наверно уже никогда не будут снимать.',
      date: '5 мая 2020',
      vote: '121'
    },
    {
      name: 'Иван Иваныч',
      title: 'Самая лучшая рецензия из всех рецензий. Топ Рецензия ',
      description: 'Этот фильм входит в десятку моих самых любимых фильмов. Жаль, что такие фильмы уже не снимают и наверно уже никогда не будут снимать.',
      date: '5 мая 2020',
      vote: '121'
    }
  ]

  return (
    <>
      <section>
        <header className={style.header}>
          <div className={style.header_item}>
            <ReviewBtn quantity={12} children='Отзывы' />
            <p>о фильме ... </p>
          </div>
          <a href='#*' className={style.comments_btn}>
            <Button size='border' children='Оставить отзывы' />
          </a>
        </header>
        <div className={style.gallery}>
          <Carousel
            items={feedback.map((feedback, i) => (
              <Review key={i} rewiew={feedback} />
            ))}
            size='small'
            transition={200}
          ></Carousel>
        </div>
        <a href='#*' className={style.comments_btn_mobile}>
          <Button size='border' children='Оставить отзывы' />
        </a>
      </section>
      <section>
        <header className={style.header}>
          <div className={style.header_item}>
            <ReviewBtn quantity={12} children='Рецензии' />
          </div>
          <a href='#*' className={style.comments_btn}>
            <Button size='border' children='Написать рецензию' />
          </a>
        </header>
        <div className={style.gallery}>
          <Carousel
            items={review.map((review, i) => (
              <Review key={i} rewiew={review} />
            ))}
            size='small'
            transition={200}
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
