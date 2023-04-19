import React, { FC } from 'react'

import styles from './Footer.module.scss'
import LinkItem from './LinkItem/LinkItem'
import { Button } from '@/src/components/Button/Button'
import { appleLogo, device, envelope, googlePlayLogo, linkedin, megaphone, odnoklassniki, phone, telegram, tv, twitter, viber, vk } from '@/src/img/imges'
import { ILinks } from '@/src/types/types'

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
        <li>
          <LinkItem heading='О нас' data={aboutLinks} />
        </li>
        <li>
          <LinkItem heading='Разделы' data={sectionsLinks} />
        </li>
        <li className={styles.item}>
          <h6 className={styles.text}>Служба поддержки</h6>
          <span>
            Мы всегда готовы вам помочь. <br /> Наши операторы онлайн 24/7
          </span>
          <div className={styles.btn}>
            <Button children='Написать в чате' color='gray' />
            <div className={styles.pos_btn}>
              <Button img={envelope.src} size='icon' color='gray' />
              <Button img={phone.src} size='icon' color='gray' />
            </div>
          </div>
          <LinkItem data={ascLinks} />
          <span>Ответы на вопросы</span>
        </li>
        <li className={styles.megaphone_wrapper}>
          <div className={styles.megaphone}>
            <img src={megaphone.src} alt='' />
          </div>
          <small>
            Смотрите фильмы, сериалы и <br /> мультфильмы без рекламы
          </small>
        </li>
      </ul>
      <ul className={styles.list}>
        <div className={styles.t_wrapper}>
          <div className={styles.btn_wrapper}>
            <div className={styles.btn_wrapper__item}>
              <Button
                size='smart'
                img={appleLogo.src}
                color='gray'
                children={
                  <>
                    <p>Загрузить в</p>
                    <h3>App Store</h3>
                  </>
                }
              />
            </div>
            <div className={styles.btn_wrapper__item}>
              <Button
                size='smart'
                img={googlePlayLogo.src}
                color='gray'
                children={
                  <>
                    <p>Доступно в</p>
                    <h3>Google Play</h3>
                  </>
                }
              />
            </div>
            <div className={styles.btn_wrapper__item}>
              <Button
                size='smart'
                img={tv.src}
                color='gray'
                children={
                  <>
                    <p>Смотрите на</p>
                    <h3>Smart TV</h3>
                  </>
                }
              />
            </div>
            <div className={styles.btn_wrapper__item}>
              <Button
                size='smart'
                img={device.src}
                color='gray'
                children={
                  <>
                    <h3>Все устройства</h3>
                  </>
                }
              />
            </div>
          </div>
          <div className={styles.btn_wrapper}>
            <div className={styles.btn_wrapper__item}>
              <Button size='circle' img={vk.src} color='gray' />
            </div>
            <div className={styles.btn_wrapper__item}>
              <Button size='circle' img={odnoklassniki.src} color='gray' />
            </div>
            <div className={styles.btn_wrapper__item}>
              <Button size='circle' img={twitter.src} color='gray' />
            </div>
            <div className={styles.btn_wrapper__item}>
              <Button size='circle' img={viber.src} color='gray' />
            </div>
            <div className={styles.btn_wrapper__item}>
              <Button size='circle' img={linkedin.src} color='gray' />
            </div>
            <div className={styles.btn_wrapper__item}>
              <Button size='circle' img={telegram.src} color='gray' />
            </div>
          </div>
        </div>
        <div className={styles.b_wrapper}>
          <span> &copy; 2023 ООО «Иви.ру» </span> HBO ® and related service marks are the property of Home Box Office, Inc
        </div>
      </ul>
    </footer>
  )
}

export default Footer
