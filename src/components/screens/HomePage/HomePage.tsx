import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlineRight } from 'react-icons/ai'
import { RxDotFilled } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import filmsStyles from '../Movies/movies.module.scss'

import styles from './homePage.module.scss'
import LeftArrow from '@/src/components/Arrows/LeftArrow'
import RightArrow from '@/src/components/Arrows/RightArrow'
import { Button } from '@/src/components/Button/Button'
import Film from '@/src/components/Film/Film'
import MainPageFilm from '@/src/components/MainPageFilm/MainPageFilm'
import Meta from '@/src/components/seo/Meta'
import { contentList, mainPageSliderData } from '@/src/globalData/globalData'
import { setGenres, setGenresList } from '@/src/store/reducers/filterReducer'
import { IFilm } from '@/src/types/types'

const HomePage: FC = () => {
  const { t } = useTranslation()
  const [showDescription, setShowDescription] = useState<boolean>(false)
  let settings = {
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    speed: 500,
    infinite: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 12000,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerMode: false
        }
      }
    ]
  }
  let top10settings = {
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    adaptiveHeight: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  }

  let filmCardsSettings = {
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    adaptiveHeight: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          initialSlide: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 1
        }
      },
      {
        breakpoint: 750,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      }
    ]
  }
  const [data, setData] = useState<IFilm[]>([] as IFilm[])
  const [mainFirstSection, setMainFirstSection] = useState<IFilm[]>([] as IFilm[])
  const [mainSecondSection, setMainSecondSection] = useState<IFilm[]>([] as IFilm[])
  useEffect(() => {
    fetch(`http://localhost:3003/info?limit=10`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => setData(json.rows))
      .catch(err => console.log(err))

    fetch(`http://localhost:3003/info?limit=20&genres=2`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => setMainFirstSection(json.rows))
      .catch(err => console.log(err))

    fetch(`http://localhost:3003/info?limit=20&genres=4`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => setMainSecondSection(json.rows))
      .catch(err => console.log(err))
  }, [])
  const dispatch = useDispatch()
  return (
    <Meta title={t('home')} description=''>
      <div>
        <Slider {...settings}>
          {mainPageSliderData.map((el, idx) => (
            <div key={idx} className={styles.sliderItemContainer}>
              <img className={styles.image} src={el.link} alt='slider-poster' />
              <img className={styles.slideInnerImg} src={el.img} alt='img' />
              <span className={styles.slideDescription}>{el.desc}</span>
              <Button className={styles.sliderButton} color='red'>
                {t('watchFree')}
              </Button>
            </div>
          ))}
        </Slider>
        <div className={styles.btnContainer}>
          <Button img='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg' color='mainBlueGradient' className={`${styles.btn} ${styles.btn__img}`}>
            {t('subscribe30')}
          </Button>
          <Button img='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg' className={styles.btn} color='mainGray'>
            {t('promo-code')}
          </Button>
        </div>
        <div className={styles.mainSection__description}>
          <h1 className={styles.sectionTitle}>{t('iviTitle')}</h1>
          <div className={filmsStyles.descriptionWrapper}>
            <p className={showDescription ? `${styles.descriptionFont} ${filmsStyles.greyText}` : `${styles.descriptionFont} ${filmsStyles.greyText} ${filmsStyles.hiddenText}`}>
              {t('mainContentP1')}
            </p>
            <p className={showDescription ? `${styles.descriptionFont} ${filmsStyles.greyText}` : `${styles.descriptionFont} ${filmsStyles.greyText} ${filmsStyles.none}`}>
              {t('mainContentP2')}
            </p>
            <p className={showDescription ? `${styles.descriptionFont} ${filmsStyles.greyText}` : `${filmsStyles.descriptionFont} ${filmsStyles.greyText} ${filmsStyles.none}`}>
              {t('mainContentP3')}
            </p>
            <ol className={showDescription ? `${styles.descriptionFont} ${filmsStyles.greyText} ${styles.list}` : `${filmsStyles.none}`}>
              {contentList.map((el, idx) => (
                <li className={styles.listElem} key={idx}>
                  <RxDotFilled className={styles.dot} />
                  {t(el)}
                </li>
              ))}
            </ol>
            <p className={showDescription ? `${styles.descriptionFont} ${filmsStyles.greyText}` : `${filmsStyles.descriptionFont} ${filmsStyles.greyText} ${filmsStyles.none}`}>
              {t('mainContentP4')}
            </p>
          </div>
          <span className={filmsStyles.clauseToggle} onClick={() => setShowDescription(!showDescription)}>
            {showDescription ? `${t('collapseBtn')}` : `${t('expandBtn')}`}
          </span>
        </div>
        <div className={styles.topSectionWrapper}>
          <img src='https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg' alt='top10' />
          <span className={styles.topSectionWrapper__title}>{t('forWeek')}</span>
        </div>

        <Slider {...top10settings}>
          {data.map((el, idx) => (
            <MainPageFilm key={idx} id={idx} film={el} />
          ))}
        </Slider>
        <div>
          <Link
            href='/movies'
            onClick={() => {
              dispatch(setGenresList(['Боевик']))
              dispatch(setGenres([2]))
            }}
            className={styles.topSectionWrapper}
          >
            <span className={styles.topSectionWrapper__title}>{t('action')}</span>
            <AiOutlineRight />
          </Link>
        </div>
        <Slider {...filmCardsSettings}>
          {mainFirstSection.map((el, idx) => (
            <Film type='slider' key={idx} film={el} />
          ))}
        </Slider>
        <div>
          <Link
            href='/movies'
            onClick={() => {
              dispatch(setGenresList(['Драма']))
              dispatch(setGenres([4]))
            }}
            className={styles.topSectionWrapper}
          >
            <span className={styles.topSectionWrapper__title}>{t('drama')}</span>
            <AiOutlineRight />
          </Link>
        </div>
        <Slider className={styles.filmsSlider} {...filmCardsSettings}>
          {mainSecondSection.map((el, idx) => (
            <Film type='slider' key={idx} film={el} />
          ))}
        </Slider>
      </div>{' '}
    </Meta>
  )
}

export default HomePage
