import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './movies.module.scss'
import BreadCrumbNavigation from '@/src/components/BreadCrumbNavigation/BreadCrumbNavigation'
import { Button } from '@/src/components/Button/Button'
import Carousel from '@/src/components/Carousel/Carousel'
import Film from '@/src/components/Film/Film'
import Filter from '@/src/components/Filter/Filter'
import Sort from '@/src/components/Sort/Sort'
import { InfoService } from '@/src/services/info.service'
import { selectMoviesList, setMoviesList } from '@/src/store/reducers/dataBaseReducer'
import { selectCountries, selectGenres, selectPickedYear, selectRate, selectReviewAmount } from '@/src/store/reducers/filterReducer'
import { selectSort } from '@/src/store/reducers/sortReducer'
import { TypeFilm } from '@/src/types/types'
import { useTranslation } from 'react-i18next'
import Meta from '../../seo/Meta'

const MoviesPage: FC = () => {
  const rate = useSelector(selectRate)
  const reviewAmount = useSelector(selectReviewAmount)
  const headersArray = [
    '2022 год',
    '2021 год',
    '2020 год',
    '2019 год',
    '2018 год',
    'Бесплатные',
    'Русские фильмы',
    'Советские фильмы',
    'Американские фильмы',
    'Индийские фильмы',
    'Комедии',
    'Ужасы',
    'Фантастические',
    'Мелодрамы',
    'Триллеры',
    'Драмы'
  ]
  const movies = useSelector(selectMoviesList)
  const sort = useSelector(selectSort)
  const countries = useSelector(selectCountries)
  const genres = useSelector(selectGenres)
  const year = useSelector(selectPickedYear)
  const [showDescription, setShowDescription] = useState<boolean>(false)
  const genreList = [
    {
      name: 'iviPremiers',
      src: 'https://thumbs.dfs.ivi.ru/storage5/contents/e/5/a46c24c02991bffcc15cff72344ea0.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/new-movies'
    },
    {
      name: 'newContent',
      src: 'https://thumbs.dfs.ivi.ru/storage23/contents/2/3/00363ced3df51be0453d43318a5056.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/new-in-svod'
    },
    {
      name: 'best',
      src: 'https://thumbs.dfs.ivi.ru/storage23/contents/0/4/76774ca880a36b4765473131b03ad0.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/luchshee-v-podpiske'
    },
    {
      name: 'newRussian',
      src: 'https://thumbs.dfs.ivi.ru/storage9/contents/c/f/e524a887c11e5dc54344b4963ecf70.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/russian-new-movies'
    },
    {
      name: 'newAbroad',
      src: 'https://thumbs.dfs.ivi.ru/storage4/contents/4/d/27a90983974634bf22d3c7f84e27ce.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/new-foreign-movies'
    },
    {
      name: 'bestNew',
      src: 'https://thumbs.dfs.ivi.ru/storage5/contents/5/3/f24fdc6a202c6b7fd8b733d1dedda1.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/best-new-movies-on-ivi'
    },
    {
      name: 'freeContent',
      src: 'https://thumbs.dfs.ivi.ru/storage28/contents/6/6/0180fbc123574c6f079d2fb9a800fb.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/avod-movies'
    }
  ]
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(
      `http://localhost:3003/info?limit=20&order=${sort.query}&minRating=${rate}&numRatings=${reviewAmount}&genres=${genres.toString()}&countries=${countries.toString()}&years=${year.split(' ')[0]}`,
      {
        method: 'GET'
      }
    )
      .then(res => res.json())
      .then(json => dispatch(setMoviesList(json.rows)))
      .catch(err => console.log(err))
  }, [sort, rate, reviewAmount, genres, countries, year])
  return (
    <Meta title={t('movies')}>
    <div className={styles.filmsSection}>
      <BreadCrumbNavigation activeItemClassName='slash' inactiveItemClassName='slash' omitRootLabel={false} rootLabel={t('myIvi')} />
      <div className={styles.filmsSection__description}>
        <h1 className={styles.filmsSection__title}>{t('watchFilmsTitle')}</h1>
        <div className={styles.descriptionWrapper}>
          <div className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.hiddenText}`}>
            {t('filmSectionDescriptionP1')}
          </div>
          <p className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
            {t('filmSectionDescriptionP2')}
          </p>
          <p className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
            {t('filmSectionDescriptionP3')}
          </p>
          <p className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
            {t('filmSectionDescriptionP4')}
          </p>
          <p className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
            {t('filmSectionDescriptionP5')}
          </p>
        </div>
        <span className={styles.clauseToggle} onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? `${ t('collapseBtn') }` : `${t('expandBtn')}`}
        </span>
      </div>
      {/*<Swiper style={{display: 'flex', flexDirection: 'row'}} navigation modules={[Navigation]} freeMode={true} spaceBetween={10} slidesPerView={useWindowSize('movie')}>*/}
      {/*  {genreList.map((el: any, idx: number) => (*/}
      {/*    <SwiperSlide style={{width: '270px', display: 'flex', flexDirection: 'row'}} className={styles.slide} key={idx}>*/}
      {/*      <div key={idx} title={el.name} className={styles.postersContainer}>*/}
      {/*        <a href={el.url} className={styles.carouselItem}>*/}
      {/*          <img className={styles.border} src={el.src} width={252} height={173} alt='poster' />*/}
      {/*        </a>*/}
      {/*        <span>{el.name}</span>*/}
      {/*      </div>*/}
      {/*    </SwiperSlide>*/}
      {/*  ))}*/}
      {/*</Swiper>*/}
      {/*<div className={styles.filmCardsWrapper}>*/}
      {/*  {data.map((el, idx) =>*/}
      {/*    <Film key={idx} src={el.posterUrl} rate={el.ratingKinopoisk}/>*/}
      {/*  )}*/}
      {/*</div>*/}

      <Carousel
        items={headersArray.map((el, idx) => (
          <Button color='lightGray' size='circle' key={idx} className={styles.filterBtn}>
            <span className={`${styles.filterBtn__font} ${styles.greyText}`}>{el}</span>
          </Button>
        ))}
        size='small'
        transition={200}
        className={styles.carouselItems}
      />
      <Sort />
      <Filter />
      <div className={styles.filmCardsWrapper}>
        {movies.map((el, idx) => (
          <Film key={idx} film={el} />
        ))}
      </div>
      <h2 className={styles.sectionHeader}>{t('newFilmsSection')}</h2>
      <Carousel
        items={genreList.map((el, idx) => (
          <div key={idx} title={el.name} className={styles.postersContainer}>
            <a href={el.url} className={styles.carouselItem}>
              <img className={styles.border} src={el.src} width={273} height={173} alt='poster' />
            </a>
            <span>{t(el.name)}</span>
          </div>
        ))}
        size='standard'
        transition={314}
        className={styles.standardCarouselItems}
      />
    </div>
    </Meta>
  )
}

export default MoviesPage
