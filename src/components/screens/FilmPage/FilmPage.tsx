import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiBookmark, BiFilm, BiVolumeLow } from 'react-icons/bi';
import { BsPlay } from 'react-icons/bs';
import { FiUpload } from 'react-icons/fi';
import { Oval } from 'react-loader-spinner';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';



import styles from './filmpage.module.scss';
import BreadCrumbNavigation from '@/src/components/BreadCrumbNavigation/BreadCrumbNavigation';
import { Button } from '@/src/components/Button/Button';
import Carousel from '@/src/components/Carousel/Carousel';
import Film from '@/src/components/Film/Film';
import Reviews from '@/src/components/Reviews/Reviews';
import { feedback } from '@/src/components/Reviews/props/props';
import { calcTime } from '@/src/functions/functions';
import { selectPickedMovie } from '@/src/store/reducers/dataBaseReducer';
import { IReviews } from '@/src/types/CommentsType';
import { IFilm, ITrailer } from '@/src/types/types';
import { useRouter } from 'next/router';


const FilmPage = () => {
  const actorsList: string[] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  const [showActorsWindow, setShowActorsWindow] = useState<boolean>(false)
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const pickedFilm = useSelector(selectPickedMovie)
  // const pickedTrailer = useSelector(selectPickedMovieTrailers)
  const [pickedTrailer, setPickedTrailer] = useState<ITrailer[]>([] as ITrailer[])
  const [similars, setSimilars] = useState<IFilm[]>([] as IFilm[])
  const [data, setData] = useState<IFilm>({} as IFilm)
  const [reviews, setReviews] = useState<IReviews[]>([] as IReviews[])

  const {
    query: { id }
  } = useRouter()
  //Запрос на рецензии к фильму по id
  useEffect(() => {
    fetch(`http://localhost:3004/comments/${pickedFilm.id }/tree`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setReviews(json))
      .catch(err => console.log(err))
  }, [pickedFilm])

  useEffect(() => {
    // console.log(pickedFilm.id)
    fetch(`http://localhost:3001/movies/${pickedFilm.id}/videos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setPickedTrailer(json))
      .catch(err => console.log(err))
  }, [pickedFilm])

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${pickedFilm.id}/similar`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setSimilars(json))
      .catch(err => console.log(err))
  }, [pickedFilm])

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${pickedFilm.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [pickedFilm])
  // useEffect(() => {
  //   fetch(`http://localhost:3001/movies/${pickedFilm.id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(json => console.log(json))
  //     .finally(() => setIsLoading(false))
  //     .catch(err => console.log(err))
  // }, [])
  if (!data.genres || !pickedTrailer.length) return <Oval wrapperClass={styles.loader} color='rgba(255, 255, 255, .72)' secondaryColor='red' />
  return (
    <div className={styles.filmPageWrapper}>
      <div>
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

        <BreadCrumbNavigation inactiveItemClassName='point' omitRootLabel={true} />
        <div className={styles.filmSectionContainer}>
          <div className={styles.playerWindow}>
            <div className={styles.player}>
              <ReactPlayer width='100%' className={styles.playerWrapper} url={pickedTrailer[0].url} />
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
              <h1 className={styles.filmTitle__content}>{`${data.nameRu} (Фильм ${data.year})`}</h1>
            </div>
            <div className={styles.filmDescriptionWrapper}>
              <div className={styles.filmDescription}>
                <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>{data.year}</span>
                <span className={styles.filmDescription__font}>{`${calcTime(data.filmLength)} ${data.ratingAgeLimits.slice(3)}+`}</span>
              </div>
              <div className={styles.genreParams}>
                <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>{data.countries[0].nameRu}</span>
                {data.genres.map((el, idx) => (
                  <div className={styles.genreParams} key={idx}>
                    <span key={idx} className={styles.dot}>
                      .
                    </span>
                    <span key={el.nameRu} className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>
                      {el.nameRu}
                    </span>
                  </div>
                ))}
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
                  <span className={styles.rate}>{data.ratingKinopoisk}</span>
                </div>
                <span>Рейтинг Иви</span>
              </div>
              <div className={styles.filmActorCard__wrapper}>
                <div className={styles.filmActorCard}>
                  <div className={styles.actor} style={{ backgroundImage: `url(${data.posterUrl})` }}></div>
                </div>
                <span>Эдвард Нортон</span>
              </div>
            </div>
            <div className={styles.filmDescription__font}>{data.shortDescription}</div>
            {showFullDescription ? (
              <div className={styles.fullDescriptionWrapper}>
                <span className={styles.filmDescription__font}>{data.description}</span>
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
                  <span className={styles.summaryRate}>{data.ratingKinopoisk}</span>
                </div>
                <div className={styles.summaryReviews__wrapper}>
                  <span>Рейтинг Иви</span>
                  <span className={styles.filmDescription__font}>Интересный сюжет</span>
                  <span className={styles.ratingFont}>{`${data.ratingKinopoiskVoteCount} оценок`}</span>
                </div>
              </div>

              <div className={styles.rateBtn}>Оценить</div>
            </div>
          </div>
        </div>
        <div className={styles.galleryWrapper}>
          <span className={styles.filmPage__titleText}>{`С фильмом «${data.nameRu}» смотрят`}</span>

          <Carousel
            items={similars.map(el => (
              <Film film={el} />
            ))}
            size={'standard'}
            transition={350}
            className={styles.moviesContainer}
          />
        </div>
        <div className={styles.galleryWrapper}>
          <span className={`${styles.filmPage__titleText} ${styles.underline}`}>Актеры и создатели</span>
          <div className={styles.actorSection__wrapper}>
            {actorsList.map((el, idx) =>
              idx <= 9 ? (
                <div key={idx} className={styles.actorSection}>
                  <img
                    className={styles.actorImage__Wrapper}
                    src='https://thumbs.dfs.ivi.ru/storage37/contents/4/b/57c06f0d0149b0a4965acf8f339437.jpg/88x88/?q=85'
                    alt='actorImg'
                  />
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
        <Reviews reviews={reviews} titleBtn='Рецензии' btn='Оставить рецензию' numberOfReviews={reviews.length} aboutTheFilm={`На фильм "${pickedFilm.nameRu}"`} />
        <div className={styles.watchAllDevicesSection}>
          <div className={styles.watchAllDevices__content}>
            <span className={styles.filmPage__titleText}>{`Cмотреть «${data.nameRu}» на всех устройствах`}</span>
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
            <img src={data.posterUrl} className={styles.posterPic} alt='devisePic' />
            <img src={data.posterUrl} className={styles.posterMobilePic} alt='devisePic' />
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
          <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>{data.genres[0].nameRu}</span>
          <span className={styles.dot}>.</span>
          <span className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>{data.nameRu}</span>
        </div>
      </div>
    </div>
  )
}

export default FilmPage