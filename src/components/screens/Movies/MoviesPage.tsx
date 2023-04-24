import React, { useEffect, useState } from 'react'
import styles from './movies.module.scss'
import Sort from '@/src/components/Sort/Sort'
import { Button } from '@/src/components/Button/Button'
import Carousel from '@/src/components/Carousel/Carousel'
import BreadCrumbNavigation from '@/src/components/BreadCrumbNavigation/MainBreadCrumb/MainBreadCrumbs'
import { selectSort } from '@/src/store/reducers/sortReducer'
import { useDispatch, useSelector } from 'react-redux'
import { selectMoviesList, setMoviesList } from '@/src/store/reducers/dataBaseReducer'
import {
  selectCountries,
  selectGenres, selectPickedYear,
  selectRate,
  selectReviewAmount
} from '@/src/store/reducers/filterReducer'
import Film from '@/src/components/Film/Film'
import Filter from '@/src/components/Filter/Filter'


const MoviesPage = () => {
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
      name: 'Премьеры на Иви',
      src: 'https://thumbs.dfs.ivi.ru/storage5/contents/e/5/a46c24c02991bffcc15cff72344ea0.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/new-movies'
    },
    {
      name: 'Новинки Подписки',
      src: 'https://thumbs.dfs.ivi.ru/storage23/contents/2/3/00363ced3df51be0453d43318a5056.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/new-in-svod'
    },
    {
      name: 'Лучшее в подписке',
      src: 'https://thumbs.dfs.ivi.ru/storage23/contents/0/4/76774ca880a36b4765473131b03ad0.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/luchshee-v-podpiske'
    },
    {
      name: 'Российские новинки',
      src: 'https://thumbs.dfs.ivi.ru/storage9/contents/c/f/e524a887c11e5dc54344b4963ecf70.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/russian-new-movies'
    },
    {
      name: 'Зарубежные новинки',
      src: 'https://thumbs.dfs.ivi.ru/storage4/contents/4/d/27a90983974634bf22d3c7f84e27ce.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/new-foreign-movies'
    },
    {
      name: 'Лучшие новинки',
      src: 'https://thumbs.dfs.ivi.ru/storage5/contents/5/3/f24fdc6a202c6b7fd8b733d1dedda1.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/best-new-movies-on-ivi'
    },
    {
      name: 'Бесплатные новинки',
      src: 'https://thumbs.dfs.ivi.ru/storage28/contents/6/6/0180fbc123574c6f079d2fb9a800fb.png/604x406/?q=85',
      url: 'https://www.ivi.ru/collections/avod-movies'
    }
  ]
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(`http://localhost:3003/info?order=${sort.query}&minRating=${rate}&numRatings=${reviewAmount}&genres=${genres.toString()}&countries=${countries.toString()}&years=${year}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(json => dispatch(setMoviesList(json.rows)))
      .catch(err => console.log(err))
  }, [sort, rate, reviewAmount, genres, countries])
  return (
    <div className={styles.filmsSection}>
      <BreadCrumbNavigation useDefaultStyle={false}/>
      <div className={styles.filmsSection__description}>
        <h1 className={styles.filmsSection__title}>Фильмы смотреть онлайн</h1>
        <div className={styles.descriptionWrapper}>
          <div className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.hiddenText}`}>
            Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая сайты в поисках чего-нибудь интересного? Стоит задержаться на ivi.ru – фильмов, которые собраны у
            нас, вам хватит надолго. Коллекция постоянно пополняется как новыми фильмами, так и признанными шедеврами прошлых лет! Независимо от того, кто вы – любитель энергичных
            боевиков или поклонница молодежных сериалов, изобилие нашего каталога заставит вас забыть обо всех других способах проведения досуга, и вы будете пересматривать любимые
            фильмы онлайн снова и снова!
          </div>
          <p className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
            Выбор фильмов очень широк и многообразен, так что каждый найдет для себя что-то интересное, каким бы ни были его вкусы. Предпочитаете картины исключительно зарубежного
            производства? У нас их предостаточно: это и золотая классика Голливуда, и душевные французские комедии, и темпераментные итальянские драмы, и шумные индийские
            музыкальные фильмы. А может, вы патриот и любите российские фильмы? Что ж, и таких фильмов у нас немало. Что вам больше по вкусу – добрая старая классика или новинки
            кинопроката? Неважно, каким будет ваш ответ – у нас есть все, как картины эпохи зарождения кинематографа, так 2018 года и фильмы 2017.
          </p>
          <p className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
            В нашем каталоге вы найдете любые жанры. Это и фильмы про любовь, и детективы, и боевики, и вестерны, и фантастика, и арт-хаус, и уморительные комедии, и фильмы про
            войну, и ужасы, и триллеры, и документалистика... Кроме «полного метра» на сайте представлены также короткометражные фильмы, а также иностранные и русские сериалы.
          </p>
          <p className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
            Если вас интересуют самые знаковые фильмы онлайн в том или ином жанре, система рубрикации поможет вам без труда сориентироваться и найти, например, лучшие драмы или
            лучший анимационный фильм онлайн.
          </p>
          <p className={showDescription ? `${styles.descriptionFont} ${styles.greyText}` : `${styles.descriptionFont} ${styles.greyText} ${styles.none}`}>
            Не упустите замечательную возможность смотреть фильмы онлайн без регистрации, выбирая только то, что вам действительно интересно, и тогда, когда вам это удобно. Ведь
            это так просто и приятно!
          </p>
        </div>
        <span className={styles.clauseToggle} onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? 'Свернуть' : 'Развернуть'}
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
        {movies.map((el, idx) => <Film key={idx} film={el}/>)}
      </div>
      <h2 className={styles.sectionHeader}>Фильмы-новинки</h2>
      <Carousel
        items={genreList.map((el, idx) => (
          <div key={idx} title={el.name} className={styles.postersContainer}>
            <a href={el.url} className={styles.carouselItem}>
              <img className={styles.border} src={el.src} width={273} height={173} alt='poster' />
            </a>
            <span>{el.name}</span>
          </div>
        ))}
        size='standard'
        transition={314}
        className={styles.standardCarouselItems}
      />
    </div>
  )
}

export default MoviesPage
