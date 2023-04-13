import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDown, AiOutlineMenu, AiOutlineUp } from 'react-icons/ai'
import { FiAlignRight } from 'react-icons/all'


const Sort = () => {

  const sortArray = ['По рейтингу на Кинопоиске', 'По рейтингу', 'По дате выхода', 'По алфавиту']
  const [active, setActive] = useState<boolean>(false)
  const [currentSort, setCurrentSort] = useState<string>('По рейтингу на Кинопоиске')

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef}>
      <div onClick={() => setActive(!active)} className='genre-sorting white-text'>
        <FiAlignRight/>
        <div>{currentSort}</div>
        {active ? <AiOutlineUp/> : <AiOutlineDown/>}
      </div>
      <div className={active ? 'dropdown-menu' : 'none'}>
        <div className='grey-text dropdown-menu__item '>Сортировать</div>
        {sortArray.map((el, idx) =>
          <div onClick={() => {
            setActive(false)
            setCurrentSort(`${el}`)
          }} className={currentSort === el ? 'dropdown-menu__item grey-text active' : 'dropdown-menu__item grey-text'} key={idx}>{el}</div>
        )}
      </div>
    </div>
  )
}

export default Sort
