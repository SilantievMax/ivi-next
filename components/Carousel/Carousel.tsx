import React, { ReactNode, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import styles from './Carousel.module.scss'


interface Icarousel {
  items: ReactNode[]
  size: 'small' | 'standard'
  transition: number
  className: string
}



const Carousel = (props: Icarousel): JSX.Element => {
  const {items, size, className, transition} = props
  const [carouselTranslate, setCarouselTranslate] = useState<number>(0)
  const [currentWidth, setCurrentWidth] = useState<number>(1211)

  return (
    <div className={styles.carousel}>
      <AiOutlineLeft style={{height: size === 'small' ? 32 : 28 , width: size === 'small' ? 20 : 25 }}
        className={carouselTranslate === 0 ? `${styles.greyText} ${styles.arrow} ${styles.hidden}` : `${styles.greyText} ${styles.arrow}`}
        onClick={() => setCarouselTranslate(carouselTranslate + transition)} />
      <div style={{ width: `${currentWidth}px` }} className={styles.carouselWrapper}>
        <div className={className}
             style={{ transform: `translateX(${carouselTranslate}px)` }}>
          {items}
        </div>
      </div>
      <AiOutlineRight
        style={{height: size === 'small' ? 32 : 28 , width: size === 'small' ? 20 : 25 }}
        onClick={() => {
          setCarouselTranslate(carouselTranslate - transition < -currentWidth ? -carouselTranslate - currentWidth + transition : carouselTranslate - transition)
        }}
        className={carouselTranslate - 300 < -currentWidth ? `${styles.greyText} ${styles.arrow} ${styles.hidden}` : `${styles.greyText} ${styles.arrow}`}
      />
    </div>
  )
}

export default Carousel