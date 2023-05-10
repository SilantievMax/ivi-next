import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'

const LeftArrow = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <AiOutlineLeft
      className={className}
      style={{ ...style, display: "block", color: 'white' }}
      onClick={onClick}
    />
  )
}


export default LeftArrow
