import { title } from 'process'
import React, { FC } from 'react'

import styles from './Footer.module.scss'
import LinkItem from './LinkItem/LinkItem'
import { ILinks } from '@/types/types'

const aboutLinks: ILinks[] = [
  { title: 'О компании', link: 'https://corp.ivi.ru/?_gl=1*ej3vmc*_ga*NjYzNjY3NDguMTY1MTQyOTE1MA..*_ga_GETQ4387MJ*MTY4MTMxNTUxMi4yNC4xLjE2ODEzMTc5NjAuNDcuMC4w' },
  {
    title: 'Вакансии',
    link: 'https://corp.ivi.ru/career/?_gl=1*1moy7pv*_ga*NjYzNjY3NDguMTY1MTQyOTE1MA..*_ga_GETQ4387MJ*MTY4MTMxNTUxMi4yNC4xLjE2ODEzMTc5NjAuNDcuMC4w#career-vacancy-block'
  },
  { title: 'Программа бета-тестирования', link: 'https://www.ivi.ru/pages/beta' },
  { title: 'Информация для партнёров', link: 'https://www.ivi.ru/info/partners' },
  {
    title: 'Размещение рекламы',
    link: 'https://corp.ivi.ru/advertisers/?_gl=1*1moy7pv*_ga*NjYzNjY3NDguMTY1MTQyOTE1MA..*_ga_GETQ4387MJ*MTY4MTMxNTUxMi4yNC4xLjE2ODEzMTc5NjAuNDcuMC4w'
  },
  { title: 'Пользовательское соглашение', link: 'https://www.ivi.ru/info/agreement' },
  { title: 'Политика конфиденциальности', link: 'https://www.ivi.ru/info/confidential' },
  { title: 'Комплаенс', link: 'https://www.ivi.ru/info/goryachaya-liniya-komplaens' }
]

const sectionsLinks: ILinks[] = [
  { title: 'Мой Иви', link: 'https://www.ivi.ru/' },
  { title: 'Что нового', link: 'https://www.ivi.ru/new' },
  { title: 'Фильмы', link: 'https://www.ivi.ru/movies' },
  { title: 'Сериалы', link: 'https://www.ivi.ru/series' },
  { title: 'Мультфильмы', link: 'https://www.ivi.ru/animation' },
  { title: 'TV+', link: 'https://www.ivi.ru/tvplus' },
  { title: 'Что посмотреть', link: 'https://www.ivi.ru/goodmovies' },
  { title: 'Активация сертификата', link: 'https://www.ivi.ru/cert' }
]

const ascLinks: ILinks[] = [
  { title: 'ask.ivi.ru', link: 'https://ask.ivi.ru/?_gl=1*1u85rbz*_ga*NjYzNjY3NDguMTY1MTQyOTE1MA..*_ga_GETQ4387MJ*MTY4MTMxNTUxMi4yNC4xLjE2ODEzMTk1MTAuNjAuMC4w' }
]

const Footer: FC = () => {
  return (
    <footer>
      <ul className={styles.list}>
        <LinkItem heading='О нас' data={aboutLinks} />
        <LinkItem heading='Разделы' data={sectionsLinks} />
        <li className={styles.item}>
          <h6 className={styles.text}>Служба поддержки</h6>
          <span>
            Мы всегда готовы вам помочь. <br /> Наши операторы онлайн 24/7
          </span>
          <button className={styles.btn}>Написать в чате</button>
          <span>Ответы на вопросы</span>
        </li>
        <li>
          <small>
            Смотрите фильмы, сериалы и <br /> мультфильмы без рекламы
          </small>
        </li>
      </ul>
      <ul className={styles.list}></ul>
    </footer>
  )
}

export default Footer
