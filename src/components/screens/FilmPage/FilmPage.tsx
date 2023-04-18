import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiBookmark, BiFilm, BiVolumeLow, BsPlay, FiUpload } from 'react-icons/all';
import ReactPlayer from 'react-player';



import styles from './filmpage.module.scss';
import Reviews from '@/src/components/Reviews/Reviews'
import { feedback } from '@/src/components/Reviews/props/props';


const FilmPage = () => {
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
      <div className={styles.breadCrumbs}>
        <Link as='/movies' href='/MoviesPage'>
          <span
            className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Фильмы</span>
        </Link>
        <span className={styles.dot}>.</span>
        <span
          className={`${styles.filmDescription__font} ${styles.filmDescription__font__interact}`}>Триллеры</span>
      </div>
      <div className={styles.filmSectionContainer}>
        <div className={styles.player}>
          <ReactPlayer width='100%' className={styles.playerWrapper}
                       url='https://www.youtube.com/watch?v=VjhT_TnD_f8' />
          <div className={styles.playerOptions}>
            <div className={styles.option}>
              <BsPlay className={styles.playImg}/>
              <span>Трейлер</span>
            </div>
            <div className={styles.option}>
              <FiUpload/>
            </div>
            <div className={styles.option}>
              <BiBookmark/>
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
      <Reviews items={feedback} titleBtn='Отзывы' btn='Оставить отзывы' aboutTheFilm='О фильме...' />
    </div>
  )
}

export default FilmPage