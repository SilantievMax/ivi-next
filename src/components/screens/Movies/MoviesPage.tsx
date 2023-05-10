import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import useWindowSize from '../../Reviews/widthWindow'
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
import { genreList, headersArray } from '@/src/functions/globalData'
import LeftArrow from '@/src/components/Arrows/LeftArrow'
import RightArrow from '@/src/components/Arrows/RightArrow'

const MoviesPage: FC = () => {
  const rate = useSelector(selectRate)
  const reviewAmount = useSelector(selectReviewAmount)
  const movies = useSelector(selectMoviesList)
  const sort = useSelector(selectSort)
  const countries = useSelector(selectCountries)
  const genres = useSelector(selectGenres)
  const year = useSelector(selectPickedYear)
  const [showDescription, setShowDescription] = useState<boolean>(false)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(
      `http://localhost:3003/info?limit=20&order=${sort.query}&minRating=${rate}&numRatings=${reviewAmount}&genres=${genres.toString()}&countries=${countries.toString()}&years=${
        year.split(' ')[0]
      }`,
      {
        method: 'GET'
      }
    )
      .then(res => res.json())
      .then(json => dispatch(setMoviesList(json.rows)))
      .catch(err => console.log(err))
  }, [sort, rate, reviewAmount, genres, countries, year])
  let settings = {
    prevArrow:<LeftArrow/>,
    nextArrow:<RightArrow/>,
    adaptiveHeight:false,
    speed: 500,
    infinite: false,
    variableWidth: false,
    slidesToShow: 4,
    slidesToScroll: 1,
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

        {/* <div className={styles.filmCardsWrapper}>
        {data.map((el, idx) =>
          <Film key={idx} src={el.posterUrl} rate={el.ratingKinopoisk}/>
        )}
      </div> */}
        <div>
          <Swiper  navigation modules={[Navigation]} slidesPerView={'auto'} spaceBetween={10}>
            {headersArray.map((el, idx) => (
              <SwiperSlide key={idx} className={styles.swiper_slide} >
                <div >
                  <Button color='lightGray' size='circle' key={idx} className={styles.filterBtn}>
                    <span className={`${styles.filterBtn__font} ${styles.greyText}`}>{el}</span>
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Sort />
        <Filter />
        <div className={styles.filmCardsWrapper}>
          {movies.map((el, idx) => (
            <Film key={idx} film={el} />
          ))}
        </div>
        <h2 className={styles.sectionHeader}>{t('newFilmsSection')}</h2>
        <div className={styles.carouselWrapper}>
          <Swiper navigation modules={[Navigation]} freeMode={true} spaceBetween={10} slidesPerView={useWindowSize('movie')}>
            {genreList.map((el: any, idx: number) => (
              <SwiperSlide key={idx}>
                <div key={idx} title={el.name} className={styles.postersContainerSwiper}>
                  <a href={el.url} className={styles.carouselItemSwiper}>
                    <img className={styles.borderSwiper} src={el.src} alt='poster' />
                  </a>
                  <span>{t(el.name)}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>



      {/*<Slider prevArrow=<LeftArrow/>*/}
      {/*        nextArrow=<RightArrow/>*/}
      {/*        initialSlide={0}*/}
      {/*        speed={500}*/}
      {/*        infinite={true}*/}
      {/*        variableWidth={true}*/}
      {/*        slidesToShow={10}*/}
      {/*        slidesToScroll={5}>*/}
      {/*  {headersArray.map((el, idx) => (*/}
      {/*    <Button color='lightGray' size='circle' key={idx} className={styles.filterBtn}>*/}
      {/*      <span className={`${styles.filterBtn__font} ${styles.greyText}`}>{el}</span>*/}
      {/*    </Button>*/}
      {/*  ))}*/}
      {/*</Slider>*/}
    </Meta>
  )
}

export default MoviesPage
