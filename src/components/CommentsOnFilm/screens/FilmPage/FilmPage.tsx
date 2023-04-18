import React, { useEffect, useState } from 'react'
import styles from './filmpage.module.scss'
import Link from 'next/link'
import { BiBookmark, BiFilm, BiVolumeLow } from 'react-icons/bi'
import { BsPlay } from 'react-icons/bs'
import { FiUpload } from 'react-icons/fi'
import ReactPlayer from 'react-player'
import Carousel from '@/src/components/Carousel/Carousel'
import Film from '@/src/components/Film/Film'
import { Button } from '@/src/components/Button/Button'
import Reviews from '@/src/components/CommentsOnFilm/Reviews/Reviews'
import { feedback } from '@/src/components/CommentsOnFilm/Reviews/props/props'

const FilmPage = () => {

  const actorsList: string[] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  const [showActorsWindow, setShowActorsWindow] = useState<boolean>(false)
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false)
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

  const data = {
    'kinopoiskId': 301,
    'imdbId': null,
    'nameRu': 'Матрица',
    'nameEn': null,
    'nameOriginal': 'The Matrix',
    'posterUrl': 'https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg',
    'posterUrlPreview': 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg',
    'coverUrl': 'https://avatars.mds.yandex.net/get-ott/2419418/2a0000017c27e0e090b55381c1b06e5c5b0b/orig',
    'logoUrl': null,
    'reviewsCount': 314,
    'ratingGoodReview': null,
    'ratingGoodReviewVoteCount': 0,
    'ratingKinopoisk': 8.5,
    'ratingKinopoiskVoteCount': 671197,
    'ratingImdb': 8.7,
    'ratingImdbVoteCount': 1933291,
    'ratingFilmCritics': 7.8,
    'ratingFilmCriticsVoteCount': 161,
    'ratingAwait': null,
    'ratingAwaitCount': 0,
    'ratingRfCritics': 60,
    'ratingRfCriticsVoteCount': 5,
    'webUrl': 'https://www.kinopoisk.ru/film/301/',
    'year': 1999,
    'filmLength': 136,
    'slogan': 'Добро пожаловать в реальный мир',
    'description': 'Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.',
    'shortDescription': 'Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным',
    'editorAnnotation': null,
    'isTicketsAvailable': false,
    'productionStatus': null,
    'type': 'FILM',
    'ratingMpaa': 'r',
    'ratingAgeLimits': 'age16',
    'countries': [
      {
        'country': 'США'
      },
      {
        'country': 'Австралия'
      }
    ],
    'genres': [
      {
        'genre': 'фантастика'
      },
      {
        'genre': 'боевик'
      }
    ],
    'startYear': null,
    'endYear': null,
    'serial': false,
    'shortFilm': false,
    'completed': false,
    'hasImax': false,
    'has3D': false,
    'lastSync': '2023-03-06T20:44:06.648197'
  }

  return (
    <div className={styles.filmPageWrapper}>
      {showActorsWindow ? <>
        <span onClick={() => setShowActorsWindow(false)}>К фильму</span>
        <div className={styles.popup__wrapper}>

        </div>
        <div></div>
      </> : ''}
      {/*<div className={style.gallery}>*/}
      {/*<Swiper navigation modules={[Navigation]} freeMode={true} spaceBetween={0} slidesPerView={7} >*/}
      {/*  {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((el, idx) => (*/}
      {/*    <SwiperSlide className={styles.slide} key={idx}>*/}
      {/*      <Film key={1} src=''/>*/}
      {/*    </SwiperSlide>*/}
      {/*  ))}*/}
      {/*</Swiper></div>*/}
      <div className={styles.breadCrumbs}>
        <Link href='/MoviesPage'>
          <span
            className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Фильмы</span>
        </Link>
        <span className={styles.dot}>.</span>
        <span
          className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Триллеры</span>
      </div>
      <div className={styles.filmSectionContainer}>
        <div className={styles.playerWindow}>
          <div className={styles.player}>
            <ReactPlayer width='100%' className={styles.playerWrapper}
                         url='https://www.youtube.com/watch?v=VjhT_TnD_f8' />
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
            <span
              className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>{data.year}</span>
              <span className={styles.filmDescription__font}>2ч. 13мин. 18+</span>
            </div>
            <div className={styles.genreParams}>
            <span
              className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>США</span>
              <span className={styles.dot}>.</span>
              <span
                className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Триллеры</span>
              <span className={styles.dot}>.</span>
              <span
                className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Драмы</span>
              <span className={styles.dot}>.</span>
              <span
                className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Криминал</span>
            </div>
            <div className={styles.genreLanguage}>
              <div className={`${styles.filmQuality} ${styles.filmQuality__text}`}>FullHD</div>
              <div className={styles.genreParams}>
                <BiVolumeLow className={styles.filmDescription__icon} />
                <span
                  className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Рус</span>
                <span className={styles.dot}>.</span>
                <span
                  className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>En</span>
                <BiFilm className={styles.filmDescription__icon} />
                <span
                  className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Рус</span>
                <span className={styles.dot}>.</span>
                <span
                  className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>En</span>
              </div>
            </div>

          </div>
          <div className={styles.genreParams}>
            <div className={styles.filmActorCard__wrapper}>
              <div className={styles.filmActorCard}>
                <div className={styles.ratePlate}></div>
                <span className={styles.rate}>{data.ratingFilmCritics}</span>
              </div>
              <span>Рейтинг Иви</span>
            </div>
            <div className={styles.filmActorCard__wrapper}>
              <div className={styles.filmActorCard}>
                <div className={styles.actor}
                     style={{ backgroundImage: `url(${data.posterUrl})` }}></div>
              </div>
              <span>Эдвард Нортон</span>
            </div>
          </div>
          <div className={styles.filmDescription__font}>{data.shortDescription}</div>
          {showFullDescription
            ? <div className={styles.fullDescriptionWrapper}>
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
                    <div className={`${styles.filmQuality} ${styles.filmQuality__text}`}>FullHD
                    </div>
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
            : <div onClick={() => setShowFullDescription(true)}>
              <span className={styles.filmDescription__details}>Детали о фильме</span>
            </div>}
          <div className={styles.summaryWrapper}>
            <div className={styles.summary}>
              <div className={styles.filmActorCard}>
                <span className={styles.summaryRate}>{data.ratingFilmCritics}</span>
              </div>
              <div className={styles.summaryReviews__wrapper}>
                <span>Рейтинг Иви</span>
                <span className={styles.filmDescription__font}>Интересный сюжет</span>
                <span
                  className={styles.ratingFont}>{`${data.ratingKinopoiskVoteCount} оценок`}</span>
              </div>
            </div>

            <div className={styles.rateBtn}>Оценить</div>
          </div>
        </div>
      </div>
      <div className={styles.galleryWrapper}>
        <span className={styles.filmPage__titleText}>{`С фильмом «${data.nameRu}» смотрят`}</span>
        <Carousel items={[<Film key={1} src='' />, <Film key={1} src='' />, <Film key={1} src='' />,
          <Film key={1} src='' />,  <Film key={1} src='' />,  <Film key={1} src='' />,  <Film key={1} src='' />,  <Film key={1} src='' />,  <Film key={1} src='' />,  <Film key={1} src='' />]} size={'standard'} transition={350}
                  className={styles.moviesContainer} />
      </div>
      <div className={styles.galleryWrapper}>
        <span className={`${styles.filmPage__titleText} ${styles.underline}`}>Актеры и создатели</span>
        <div className={styles.actorSection__wrapper}>
          {actorsList.map((el, idx) =>
            idx <= 9 ?
            <div className={styles.actorSection}>
              <img className={styles.actorImage__Wrapper} src='https://thumbs.dfs.ivi.ru/storage37/contents/4/b/57c06f0d0149b0a4965acf8f339437.jpg/88x88/?q=85' alt='actorImg'/>
              <div className={styles.actor__info}>
                <span>Оливье</span>
                <span>Накаш</span>
                <span>Режиссёр</span>
              </div>
            </div> : ''
          )}
          <div onClick={() => setShowActorsWindow(true)} className={styles.showActorsBtn}>Ещё</div>
        </div>
      </div>
      <Reviews items={feedback} titleBtn='Отзывы' btn='Оставить отзывы'
               aboutTheFilm='О фильме...' />
      <div className={styles.watchAllDevicesSection}>
        <div className={styles.watchAllDevices__content}>
          <span className={styles.filmPage__titleText}>Cмотреть «1+1» на всех устройствах</span>
          <span className={`${styles.filmDescription__font} ${styles.mainContent}`}>Приложение доступно для скачивания на iOS, Android, SmartTV и приставках</span>
          <Link href='https://www.ivi.ru/devices'><Button className={styles.watchAllDevicesSection__btn} color='darkRed'>Подключить устройства</Button></Link>
        </div>
        <div className={styles.watchAllDevicesImageWrapper}>
          <img src='https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png' height={272} width={536} className={styles.devicePic}/>
          <img src='https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png' className={styles.ipadPic} />
          <img src='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/' className={styles.posterPic}/>
          <img src='https://thumbs.dfs.ivi.ru/storage8/contents/0/e/8091320a67fabb8119ac00fdc386c5.jpg/400x226/' className={styles.posterMobilePic}/>
        </div>
      </div>
      <div className={styles.breadCrumbs}>
        <Link href='/'>
          <span
            className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Мой Иви</span>
        </Link>
        <span className={styles.dot}>.</span>
        <Link href='/MoviesPage'>
          <span
            className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Фильмы</span>
        </Link>
        <span className={styles.dot}>.</span>
        <span
          className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>{data.genres[0].genre}</span>
        <span className={styles.dot}>.</span>
        <span
          className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>{data.nameRu}</span>
      </div>
    </div>
  )
}

export default FilmPage
