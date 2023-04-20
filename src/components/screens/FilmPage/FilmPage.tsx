import { GetStaticPaths, GetStaticProps } from 'next'
import { NextParsedUrlQuery } from 'next/dist/server/request-meta'
import { ParsedUrl } from 'next/dist/shared/lib/router/utils/parse-url'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiBookmark, BiFilm, BiVolumeLow } from 'react-icons/bi'
import { BsPlay } from 'react-icons/bs'
import { FiUpload } from 'react-icons/fi'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'

import styles from './filmpage.module.scss'
import BreadCrumbNavigation from '@/src/components/BreadCrumbNavigation/MainBreadCrumb/MainBreadCrumbs'
import { Button } from '@/src/components/Button/Button'
import Carousel from '@/src/components/Carousel/Carousel'
import Reviews from '@/src/components/Reviews/Reviews'
import { feedback } from '@/src/components/Reviews/props/props'
import Film from '@/src/components/Film/Film'
import { selectPickedMovie, setPickedMovie } from '@/src/store/reducers/dataBaseReducer'
import { IFilm } from '@/src/types/types'

const FilmPage = () => {
  const pickedFilm = useSelector(selectPickedMovie)
  const actorsList: string[] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  const [showActorsWindow, setShowActorsWindow] = useState<boolean>(false)
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/23423/videos', {
  //     method: 'GET',
  //     headers: {
  //       'X-API-KEY': '9867f920-35d0-4b28-b36a-2f5e7d5100f1',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(json => console.log(json))
  //     .catch(err => console.log(err))
  // }, [])

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${pickedFilm.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => dispatch(setPickedMovie(json)))
      .catch(err => console.log(err))
  }, [pickedFilm])

  return (
    <div className={styles.filmPageWrapper}>
      {showActorsWindow ? (
        <div className={styles.fullscreen__popup}>
          <span onClick={() => setShowActorsWindow(false)}>К фильму</span>
          <div className={styles.popup__wrapper}></div>
          <div className={styles.scroll__wrapper}></div>
        </div>
      ) : (
        ''
      )}
      {/*<div className={style.gallery}>*/}
      {/*<Swiper navigation modules={[Navigation]} freeMode={true} spaceBetween={0} slidesPerView={7} >*/}
      {/*  {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((el, idx) => (*/}
      {/*    <SwiperSlide className={styles.slide} key={idx}>*/}
      {/*      <Film key={1} src=''/>*/}
      {/*    </SwiperSlide>*/}
      {/*  ))}*/}
      {/*</Swiper></div>*/}
      {/*<div className={styles.breadCrumbs}>*/}
      {/*  <Link href='/Index'>*/}
      {/*    <span*/}
      {/*      className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Фильмы</span>*/}
      {/*  </Link>*/}
      {/*  <span className={styles.dot}>.</span>*/}
      {/*  <span*/}
      {/*    className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Триллеры</span>*/}
      {/*</div>*/}
      <BreadCrumbNavigation />
      <div className={styles.filmSectionContainer}>
        <div className={styles.playerWindow}>
          <div className={styles.player}>
            {/*<ReactPlayer width='100%' className={styles.playerWrapper}*/}
            {/*             url='https://www.youtube.com/watch?v=VjhT_TnD_f8' />*/}
            <div className={styles.playerOptions}>
              <div className={styles.option}>
                <BsPlay className={styles.playImg} />
                <span>Трейлер</span>
              </div>
              <div className={styles.option}>
                <FiUpload />
              </div>
              <div className={styles.option}>
                <BiBookmark />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.filmSection__content}>
          <div className={styles.filmTitle}>
            <h1 className={styles.filmTitle__content}>{`${pickedFilm.nameRu} (Фильм ${pickedFilm.year})`}</h1>
          </div>
          <div className={styles.filmDescriptionWrapper}>
            <div className={styles.filmDescription}>
              <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>{pickedFilm.year}</span>
              <span className={styles.filmDescription__font}>{`2ч. 13мин. ${pickedFilm.ratingAgeLimits}+`}</span>
            </div>
            <div className={styles.genreParams}>
              {/*{filme.countries.map(el => <span>{el.nameRu}</span>)}*/}
              <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>{pickedFilm.countries[0].nameRu}</span>
              {pickedFilm.genres.map((el, idx) => (
                <div className={styles.genreParams} key={idx}>
                  <span key={idx} className={styles.dot}>
                    .
                  </span>
                  <span key={el.nameRu} className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>
                    {el.nameRu}
                  </span>
                </div>
              ))}
              {/*<span className={styles.dot}>.</span>*/}
              {/*<span*/}
              {/*  className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Триллеры</span>*/}
              {/*<span className={styles.dot}>.</span>*/}
              {/*<span*/}
              {/*  className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Драмы</span>*/}
              {/*<span className={styles.dot}>.</span>*/}
              {/*<span*/}
              {/*  className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Криминал</span>*/}
            </div>
            <div className={styles.genreLanguage}>
              <div className={`${styles.filmQuality} ${styles.filmQuality__text}`}>FullHD</div>
              <div className={styles.genreParams}>
                <BiVolumeLow className={styles.filmDescription__icon} />
                <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Рус</span>
                <span className={styles.dot}>.</span>
                <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>En</span>
                <BiFilm className={styles.filmDescription__icon} />
                <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Рус</span>
                <span className={styles.dot}>.</span>
                <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>En</span>
              </div>
            </div>
          </div>
          <div className={styles.genreParams}>
            <div className={styles.filmActorCard__wrapper}>
              <div className={styles.filmActorCard}>
                <div className={styles.ratePlate}></div>
                <span className={styles.rate}>{pickedFilm.ratingKinopoisk}</span>
              </div>
              <span>Рейтинг Иви</span>
            </div>
            <div className={styles.filmActorCard__wrapper}>
              <div className={styles.filmActorCard}>
                <div className={styles.actor} style={{ backgroundImage: `url(${pickedFilm.posterUrl})` }}></div>
              </div>
              <span>Эдвард Нортон</span>
            </div>
          </div>
          <div className={styles.filmDescription__font}>{pickedFilm.shortDescription}</div>
          {showFullDescription ? (
            <div className={styles.fullDescriptionWrapper}>
              <span className={styles.filmDescription__font}>{pickedFilm.description}</span>
              <div className={styles.fullDescriptionData}>
                <div className={styles.fullDescription__content}>
                  <span className={styles.filmDescription__font}>Языки</span>
                  <span>Русский, Английский</span>
                </div>
                <div className={styles.fullDescription__content}>
                  <span className={styles.filmDescription__font}>Субтитры</span>
                  <span>Русский, Английский</span>
                </div>
                <div className={styles.filmDescription__font}>
                  Изображение и звук.
                  <span className={styles.filmDescription__warning}> Фактическое качество зависит от устройства и ограничений правообладателя.</span>
                  <div className={styles.qualityMarks}>
                    <div className={`${styles.filmQuality} ${styles.filmQuality__text}`}>FullHD</div>
                    <div className={`${styles.filmQuality} ${styles.filmQuality__text}`}>HD</div>
                    <div className={`${styles.filmQuality} ${styles.filmQuality__text}`}>1080</div>
                    <div className={`${styles.filmQuality} ${styles.filmQuality__text}`}>720</div>
                  </div>
                </div>
              </div>
              <div onClick={() => setShowFullDescription(false)}>
                <span className={styles.filmDescription__details}>Свернуть детали</span>
              </div>
            </div>
          ) : (
            <div onClick={() => setShowFullDescription(true)}>
              <span className={styles.filmDescription__details}>Детали о фильме</span>
            </div>
          )}
          <div className={styles.summaryWrapper}>
            <div className={styles.summary}>
              <div className={styles.filmActorCard}>
                <span className={styles.summaryRate}>{pickedFilm.ratingKinopoisk}</span>
              </div>
              <div className={styles.summaryReviews__wrapper}>
                <span>Рейтинг Иви</span>
                <span className={styles.filmDescription__font}>Интересный сюжет</span>
                <span className={styles.ratingFont}>{`${pickedFilm.ratingKinopoiskVoteCount} оценок`}</span>
              </div>
            </div>

            <div className={styles.rateBtn}>Оценить</div>
          </div>
        </div>
      </div>
      <div className={styles.galleryWrapper}>
        <span className={styles.filmPage__titleText}>{`С фильмом «${pickedFilm.nameRu}» смотрят`}</span>
        {/*<Carousel items={[<Film key={1} src='' />, <Film key={1} src='' />, <Film key={1} src='' />,*/}
        {/*  <Film key={1} src='' />,  <Film key={1} src='' />,  <Film key={1} src='' />,  <Film key={1} src='' />,  <Film key={1} src='' />,  <Film key={1} src='' />,  <Film key={1} src='' />]} size={'standard'} transition={350}*/}
        {/*          className={styles.moviesContainer} />*/}
      </div>
      <div className={styles.galleryWrapper}>
        <span className={`${styles.filmPage__titleText} ${styles.underline}`}>Актеры и создатели</span>
        <div className={styles.actorSection__wrapper}>
          {actorsList.map((el, idx) =>
            idx <= 9 ? (
              <div key={idx} className={styles.actorSection}>
                <img className={styles.actorImage__Wrapper} src='https://thumbs.dfs.ivi.ru/storage37/contents/4/b/57c06f0d0149b0a4965acf8f339437.jpg/88x88/?q=85' alt='actorImg' />
                <div className={styles.actor__info}>
                  <span>Оливье</span>
                  <span>Накаш</span>
                  <span>Режиссёр</span>
                </div>
              </div>
            ) : (
              ''
            )
          )}
          <div onClick={() => setShowActorsWindow(true)} className={styles.showActorsBtn}>
            Ещё
          </div>
        </div>
      </div>
      <Reviews items={feedback} titleBtn='Отзывы' btn='Оставить отзывы' aboutTheFilm='О фильме...' />
      <div className={styles.watchAllDevicesSection}>
        <div className={styles.watchAllDevices__content}>
          <span className={styles.filmPage__titleText}>{`Cмотреть «${pickedFilm.nameRu}» на всех устройствах`}</span>
          <span className={`${styles.filmDescription__font} ${styles.mainContent}`}>Приложение доступно для скачивания на iOS, Android, SmartTV и приставках</span>
          <Link href='https://www.ivi.ru/devices'>
            <Button className={styles.watchAllDevicesSection__btn} color='darkRed'>
              Подключить устройства
            </Button>
          </Link>
        </div>
        <div className={styles.watchAllDevicesImageWrapper}>
          <img src='https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png' height={272} width={536} className={styles.devicePic} alt='devisePic' />
          <img src='https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png' className={styles.ipadPic} alt='devisePic' />
          <img src={pickedFilm.posterUrl} className={styles.posterPic} alt='devisePic' />
          <img src={pickedFilm.posterUrl} className={styles.posterMobilePic} alt='devisePic' />
        </div>
      </div>
      <div className={styles.breadCrumbs}>
        <Link href='/'>
          <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Мой Иви</span>
        </Link>
        <span className={styles.dot}>.</span>
        <Link href='/movies'>
          <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Фильмы</span>
        </Link>
        <span className={styles.dot}>.</span>
        <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>{pickedFilm.genres[0].nameRu}</span>
        <span className={styles.dot}>.</span>
        <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>{pickedFilm.nameRu}</span>
      </div>
    </div>
  )
}

export default FilmPage
