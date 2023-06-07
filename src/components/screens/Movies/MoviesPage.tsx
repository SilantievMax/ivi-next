import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Meta from '../../seo/Meta'
import styles from './movies.module.scss'
import { MemoBreadcrumbs } from '@/src/components/BreadCrumbNavigation/BreadCrumbNavigation'
import { Button } from '@/src/components/Button/Button'
import Film from '@/src/components/Film/Film'
import Filter from '@/src/components/Filter/Filter'
import Sort from '@/src/components/Sort/Sort'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { selectMoviesList, setMoviesList } from '@/src/store/reducers/dataBaseReducer'
import {
  selectCountries,
  selectGenres,
  selectPickedYear,
  selectRate,
  selectReviewAmount
} from '@/src/store/reducers/filterReducer'
import { selectSort } from '@/src/store/reducers/sortReducer'
import Slider from 'react-slick'
import { genreList, headersArray } from '@/src/globalData/globalData'
import LeftArrow from '@/src/components/Arrows/LeftArrow'
import RightArrow from '@/src/components/Arrows/RightArrow'
import Link from 'next/link'
import { InfoService } from '@/src/services/info.service'

const MoviesPage: FC = () => {
  const rate = useSelector(selectRate)
  const reviewAmount = useSelector(selectReviewAmount)
  const movies = useSelector(selectMoviesList)
  const sort = useSelector(selectSort)
  const countries = useSelector(selectCountries)
  const genres = useSelector(selectGenres)
  const year = useSelector(selectPickedYear)
  const [showDescription, setShowDescription] = useState<boolean>(false)
  const [limit, setLimit] = useState<number>(35)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    InfoService.getAll(limit, sort, rate, reviewAmount, genres, countries, year).then(data => dispatch(setMoviesList(data))).catch(err => console.log(err))
  }, [sort, rate, reviewAmount, genres, countries, year, limit])
  let settings = {
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    speed: 500,
    infinite: false,
    variableWidth: true,
    slidesToScroll: 5,
    initialSlide: 1,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          initialSlide: 1
        }
      }
    ]
  }
  let cardsSettings = {
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    speed: 500,
    infinite: false,
    slidesToScroll: 3,
    initialSlide: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      }
    ]
  }
  return (
    <Meta title={t('movies')}>
      <div className={styles.filmsSection}>
        <MemoBreadcrumbs activeItemClassName='slash' inactiveItemClassName='slash'
                         omitRootLabel={false} rootLabel={t('myIvi')} />
        <div className={styles.filmsSection__description}>
          <h1 className={styles.filmsSection__title}>{t('watchFilmsTitle')}</h1>
          <div className={styles.descriptionWrapper}>
            <div
              className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.hiddenText}`}>
              {t('filmSectionDescriptionP1')}
            </div>
            <p
              className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
              {t('filmSectionDescriptionP2')}
            </p>
            <p
              className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
              {t('filmSectionDescriptionP3')}
            </p>
            <p
              className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
              {t('filmSectionDescriptionP4')}
            </p>
            <p
              className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
              {t('filmSectionDescriptionP5')}
            </p>
          </div>
          <span className={styles.clauseToggle}
                onClick={() => setShowDescription(!showDescription)}>
            {showDescription ? `${t('collapseBtn')}` : `${t('expandBtn')}`}
          </span>
        </div>
        <Slider {...settings}>
          {headersArray.map((el, idx) => (
            <Button color='lightGray' size='circle' key={idx} className={styles.filterBtn}>
              <span className={`${styles.filterBtn__font} ${styles.greyText}`}>{t(`${el}`)}</span>
            </Button>
          ))}
        </Slider>
        <Sort />
        <Filter />
        <div className={styles.filmCardsWrapper}>
          {movies.map((el, idx) => (
            <Film key={idx} film={el} />
          ))}
          {movies.length >= limit ? <Button size='moviesBtn' onClick={() => setLimit(limit + 35)}>{t('showMoreBtn')}</Button> : ''}
        </div>
        <h2 className={styles.sectionHeader}>{t('newFilmsSection')}</h2>
        <div className={styles.carouselWrapper}>
          <Slider {...cardsSettings}>
            {genreList.map((el: any, idx: number) => (
              <div key={idx} title={el.name} className={styles.postersContainerSwiper}>
                <Link href={el.url} className={styles.carouselItemSwiper}>
                  <img className={styles.borderSwiper} src={el.src} alt='poster' />
                </Link>
                <span>{t(el.name)}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Meta>
  )
}

export default MoviesPage
