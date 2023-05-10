import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const LeftArrow = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <AiOutlineRight
      className={className}
      style={{ ...style, display: "block", color: 'white' }}
      onClick={onClick}
    />
  )
}


export default LeftArrow
