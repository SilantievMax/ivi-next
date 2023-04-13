import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'


const Filter = () => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div className='filters-container'>
      <div className='filters-container__item'>
        <div onClick={() => setActive(!active)} className='filters-container__filter'>
          <span className='white-text'>Жанры</span>
          {active ? <AiOutlineUp className='white-text' /> :
            <AiOutlineDown className='white-text' />}
        </div>
        <div onClick={() => setActive(!active)} className='filters-container__filter'>
          <span className='white-text'>Страны</span>
          {active ? <AiOutlineUp className='white-text' /> :
            <AiOutlineDown className='white-text' />}
        </div>
        <div onClick={() => setActive(!active)} className='filters-container__filter'>
          <span className='white-text'>Годы</span>
          {active ? <AiOutlineUp className='white-text' /> :
            <AiOutlineDown className='white-text' />}
        </div>
        <div onClick={() => setActive(!active)} className='filters-container__filter'>
          <span className='white-text'>Рейтинг КП</span>
          {active ? <AiOutlineUp className='white-text' /> :
            <AiOutlineDown className='white-text' />}
        </div>
      </div>

      <div className='remove-filter-box'>
        <FiX className='remove-filter-box__btn'/>
        Сбросить фильтры
      </div>
    </div>
  )
}

export default Filter
