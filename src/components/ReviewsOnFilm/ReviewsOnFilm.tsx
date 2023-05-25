import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MdArrowBackIosNew } from 'react-icons/md'
import { RiBarChartHorizontalFill } from 'react-icons/ri'
import { Oval } from 'react-loader-spinner'
import { useSelector } from 'react-redux'

import { Button } from '../Button/Button'
import Meta from '../seo/Meta'

import FormReview from './FormReview/FormReview'
import ReviewsList from './ReviewsList/ReviewsList'
import styles from './ReviewsOnFilm.module.scss'
import { useOuside } from '@/src/hooks/useOutside'
import { setAuth } from '@/src/store/reducers/userReducers'
import { IReviews } from '@/src/types/CommentsType'
import { IFilm } from '@/src/types/types'

const ReviewsOnFilm = () => {
  const { ref, isShow, setIsShow } = useOuside(false)
  const [comment, setComment] = useState<IReviews[]>()
  const [data, setData] = useState<IFilm>({} as IFilm)
  const [sent, setSent] = useState(false)
  const { nameEn, genres, nameRu, posterUrlPreview, countries, year, ratingKinopoisk } = data
  const { t, i18n } = useTranslation()
  const auth = useSelector(setAuth)

  const newReview = () => {
    if (!auth) {
      alert('Авторизуйтесь пожалуйста')
      return
    }
    setIsShow(true)
  }
  const {
    back,
    query: { id }
  } = useRouter()

  useEffect(() => {
    setSent(false)
    fetch(`http://localhost:3004/comments/${id}/tree`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setComment(json))
      .catch(err => console.log(err))
  }, [id, sent])
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

  if (!data.id) {
    return <Oval wrapperClass={styles.loader} color='rgba(255, 255, 255, .72)' secondaryColor='red' />
  }
  return (
    <Meta title={nameEn ? `${t('reviews')} | ${i18n.language === 'en' ? nameEn : nameRu}` : `${t('reviews')}`}>
      <div className={styles.conteiner}>
        <div className={styles.conteiner__wrapper}>
          <div className={styles.btnGoBack}>
            <Button onClick={() => back()} size='iconGoBack' icon={<MdArrowBackIosNew size={25} />} children={t('to the movie')} />
          </div>
          <div className={styles.coments}>
            <h2 className={styles.title}>{i18n.language === 'en' ? nameEn : nameRu}</h2>
            <div>
              <Button size='reviews' children={t('reviews')} quantity={comment?.length} />
            </div>
            <div ref={ref} className={styles.coments_btn}>
              {isShow ? (
                <FormReview setSent={setSent} idReview={null} setShow={setIsShow} formName='Review' movieId={id} />
              ) : (
                <Button data-testid='btn-review' size='border' children={t('write a review')} onClick={() => newReview()} />
              )}
              <ul className={styles.commentList}>{comment?.length && comment.map(comment => <ReviewsList key={comment.id} comment={comment} setSent={setSent} />)}</ul>
            </div>
          </div>
          <div className={styles.movie}>
            <Link href={`/movies/${id}`} className={styles.movie__preview}>
              <img src={posterUrlPreview} alt={nameRu} />
            </Link>
            {data.id && (
              <div className={styles.movieInfo}>
                <div className={styles.rating}>
                  <h3>{ratingKinopoisk}</h3>
                  <RiBarChartHorizontalFill size={27} />
                </div>
                <div>
                  <div className={styles.year}>
                    <p>
                      {year}, {countries ? countries.map(countrie => `${countrie.nameRu}, `) : ''}
                    </p>
                    {genres ? genres.map((ganre, i) => <p key={ganre.id}>{ganre.nameRu[0].toUpperCase() + ganre.nameRu.slice(1)}</p>) : ''}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Meta>
  )
}

export default ReviewsOnFilm
