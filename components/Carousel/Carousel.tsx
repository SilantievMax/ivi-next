import React, { ReactNode, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


interface Icarousel {
  items: ReactNode[]
  size: "small" | "standard"
  transition: number
  className?: string
}

const Carousel = (props: Icarousel) => {
  const {items, size, className, transition} = props
  const [carouselTranslate, setCarouselTranslate] = useState<number>(0)
  const [currentWidth, setCurrentWidth] = useState<number>(1211)

  return (
    <div className='carousel'>
      <AiOutlineLeft style={{height: size === 'small' ? 32 : 28 , width: size === 'small' ? 20 : 25 }}
        className={carouselTranslate === 0 ? 'grey-text arrow hidden' : 'grey-text arrow'}
        onClick={() => setCarouselTranslate(carouselTranslate + transition)} />
      <div style={{ width: `${currentWidth}px` }} className='carousel-wrapper'>
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
        className={carouselTranslate - 300 < -currentWidth ? 'grey-text arrow hidden ' : 'grey-text arrow'}
      />
    </div>
  )
}

export default Carousel