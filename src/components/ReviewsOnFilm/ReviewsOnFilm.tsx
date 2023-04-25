import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { RiBarChartHorizontalFill } from 'react-icons/ri'

import { Button } from '../Button/Button'

import FormReview from './FormReview/FormReview'
import CommentList from './ReviewsList/ReviewsList'
import styles from './ReviewsOnFilm.module.scss'
import { useOuside } from '@/src/hooks/useOutside'
import { IReviews } from '@/src/types/CommentsType'
import { IFilm } from '@/src/types/types'

const ReviewsOnFilm = withRouter(() => {
  const { ref, isShow, setIsShow } = useOuside(false)
  const [comment, setComment] = useState<IReviews[]>()
  const [data, setData] = useState<IFilm>({} as IFilm)

  const {
    back,
    query: { id }
  } = useRouter()
  useEffect(() => {
    fetch(`http://localhost:3004/comments/${id}/tree`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setComment(json))
      .catch(err => console.log(err))
  }, [id])
  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div className={styles.conteiner}>
      <div className={styles.conteiner__wrapper}>
        <div className={styles.btnGoBack}>
          <Button onClick={() => back()} size='iconGoBack' icon={<MdArrowBackIosNew size={25} />} children='К фильму' />
        </div>
        <div className={styles.coments}>
          <h2 className={styles.title}>{data.nameRu}</h2>
          <div>
            <Button size='reviews' children='Рецензии' quantity={comment?.length} />
          </div>
          <div ref={ref} className={styles.coments_btn}>
            {isShow ? (
              <FormReview idReview={null} setShow={setIsShow} formName='Review' movieId={id} />
            ) : (
              <Button size='border' children='Написать рецензию' onClick={() => setIsShow(true)} />
            )}
            <ul className={styles.commentList}>{comment?.length && comment.map((comment, i) => <CommentList key={i} comment={comment} />)}</ul>
          </div>
        </div>
        <div className={styles.movie}>
          <Link href={`/movies/${id}`} className={styles.movie__preview}>
            <img src={data.posterUrlPreview} alt='' />
          </Link>
          {data.id && (
            <div className={styles.movieInfo}>
              <div className={styles.rating}>
                <h3>{data.ratingKinopoisk}</h3>
                <RiBarChartHorizontalFill size={27} />
              </div>
              <div>
                <div className={styles.year}>
                  <p>
                    {data.year}, {data.countries ? data.countries.map(countrie => countrie.nameRu) : ''}
                  </p>
                  {data.genres ? data.genres.map(ganre => <p>{ganre.nameRu[0].toUpperCase() + ganre.nameRu.slice(1)}</p>) : ''}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

export default ReviewsOnFilm
