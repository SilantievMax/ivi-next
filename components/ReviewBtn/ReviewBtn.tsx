import React, { FC, ReactNode } from 'react';
import style from './ReviewBtn.module.scss'
import { reviewsProps } from './ReviewBtn.props';


const ReviewBtn = ({ children, quantity }: reviewsProps): JSX.Element => {
  return (
    <li className={style.reviews}>
      <a>{children}</a>
      <div className={style.quantity}>{quantity}</div>
    </li>
  )
}

export default ReviewBtn