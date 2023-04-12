import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'better-react-carousel'
import { set } from 'immutable'
import {
  AiOutlineDown,
  AiOutlineLeft,
  AiOutlineMenu,
  AiOutlineRight,
  AiOutlineUp
} from 'react-icons/ai'



const Movies = () => {

  const [data, setData] = useState<any[]>([])
  const [genres, setGenres] = useState<any[]>([])
  const [showDescription, setShowDescription] = useState<boolean>(false)
  const [carouselTranslate, setCarouselTranslate] = useState<number>(0)
  const [currentWidth, setCurrentWidth] = useState<number>(1211)
  const [active, setActive] = useState<boolean>(false)
  const [currentSort, setCurrentSort] = useState<string>('По количеству оценок на Кинопоиске')
  const headersArray = ['2022 год', '2021 год', '2020 год', '2019 год', '2018 год', 'Бесплатные', 'Русские фильмы', 'Советские фильмы', 'Американские фильмы', 'Индийские фильмы', 'Бесплатные', 'Русские фильмы', 'Советские фильмы', 'Американские фильмы', 'Биб']
  const sortArray = ['По количеству оценок на Кинопоиске', 'По рейтингу', 'По дате выхода(сначала свежие)', 'По алфавиту']

  useEffect(() => {
    // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
    //   method: 'GET',
    //   headers: {
    //     'X-API-KEY': '9867f920-35d0-4b28-b36a-2f5e7d5100f1',
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.log(err))
  }, [])

  return (
    <div  className='films-section'>
      <div className='heading-container'>
        <span className='films-section__heading white-text heading-font'>Мой Иви</span>
        <span className='grey-text heading-font'>/</span>
        <span className='grey-text heading-font'>Фильмы</span>
      </div>
      <div className='films-section__description'>
        <h1 className='films-section__title white-text'>Фильмы смотреть онлайн</h1>
        <div className='description-wrapper'>
          <div
            className={showDescription ? 'description-font grey-text' : 'description-font hidden-text grey-text'}>Вы
            любите смотреть фильмы онлайн и проводите много времени,
            прочесывая сайты в поисках чего-нибудь интересного?
            Стоит задержаться на ivi.ru – фильмов, которые собраны у нас, вам хватит надолго.
            Коллекция постоянно пополняется как новыми фильмами, так и признанными шедеврами прошлых
            лет!
            Независимо от того, кто вы – любитель энергичных боевиков или поклонница молодежных
            сериалов,
            изобилие нашего каталога заставит вас забыть обо всех других способах проведения досуга,
            и вы будете пересматривать любимые фильмы онлайн снова и снова!
          </div>
          <p
            className={showDescription ? 'description-font grey-text' : 'description-font grey-text none'}>Выбор
            фильмов очень широк и многообразен, так что каждый найдет для себя что-то интересное,
            каким бы ни были его вкусы.
            Предпочитаете картины исключительно зарубежного производства? У нас их предостаточно:
            это и золотая классика Голливуда,
            и душевные французские комедии, и темпераментные итальянские драмы, и шумные индийские
            музыкальные фильмы. А может,
            вы патриот и любите российские фильмы? Что ж, и таких фильмов у нас немало. Что вам
            больше по вкусу – добрая старая классика или новинки кинопроката?
            Неважно, каким будет ваш ответ – у нас есть все, как картины эпохи зарождения
            кинематографа, так 2018 года и фильмы 2017.</p>
          <p
            className={showDescription ? 'description-font grey-text' : 'description-font grey-text none'}>В
            нашем каталоге вы найдете любые жанры. Это и фильмы про любовь, и детективы, и боевики,
            и вестерны, и фантастика, и арт-хаус,
            и уморительные комедии, и фильмы про войну, и ужасы, и триллеры, и документалистика...
            Кроме «полного метра»
            на сайте представлены также короткометражные фильмы, а также иностранные и русские
            сериалы.</p>
          <p
            className={showDescription ? 'description-font grey-text' : 'description-font grey-text none'}>Если
            вас интересуют самые знаковые фильмы онлайн в том или ином жанре, система рубрикации
            поможет вам без труда сориентироваться и найти,
            например, лучшие драмы или лучший анимационный фильм онлайн.</p>
          <p
            className={showDescription ? 'description-font grey-text' : 'description-font grey-text none'}>Не
            упустите замечательную возможность смотреть фильмы онлайн без регистрации, выбирая
            только то, что вам действительно интересно,
            и тогда, когда вам это удобно. Ведь это так просто и приятно!</p>
        </div>
        <span className='clause-toggle'
              onClick={() => setShowDescription(!showDescription)}>{showDescription ? 'Свернуть' : 'Развернуть'}</span>
      </div>

      <div className='carousel'>
        <AiOutlineLeft
          className={carouselTranslate === 0 ? 'grey-text arrow hidden' : 'grey-text arrow'}
          onClick={() => setCarouselTranslate(carouselTranslate + 200)}/>
        <div style={{ width: `${currentWidth}px` }} className='carousel-wrapper'>
          <div className='carousel-items'
               style={{ transform: `translateX(${carouselTranslate}px)` }}>
            {headersArray.map((el, idx) =>
              <button key={idx} className='filter-btn'>
                <span className='filter-btn__font grey-text'>
                  {el}
                </span>
              </button>

            )}
          </div>
        </div>
        <AiOutlineRight
          onClick={() => {setCarouselTranslate(carouselTranslate - 200 < -currentWidth ? -carouselTranslate - currentWidth + 200 : carouselTranslate - 200)}}
          className={carouselTranslate - 300 < -currentWidth ? 'grey-text arrow hidden ' : 'grey-text arrow'}
        />
      </div>
      <div>
        <div onClick={() => setActive(true)} className='genre-sorting white-text'>
          <AiOutlineMenu/>
          <div>{currentSort}</div>
          {active ? <AiOutlineUp/> : <AiOutlineDown/>}
        </div>
        <div className='dropdown-menu'>
          <span className='grey-text'>Сортировать</span>
          {sortArray.map((el, idx) =>
            <div onClick={() => setCurrentSort(`${el}`)} className={currentSort === el ? 'grey-text active' : 'grey-text'} key={idx}>{el}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Movies
