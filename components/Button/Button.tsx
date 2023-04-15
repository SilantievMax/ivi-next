import cn from 'classnames'
import React from 'react'
import styles from './Button.module.scss'
import { ButtonProps } from './Button.props'

export const Button = ({
  children,
  size,
  img,
  className,
  color,
  icon,quantity,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.img]: size === "img",
        [styles.gradient]: color === 'gradient',
        [styles.red]: color === 'red',
        [styles.redOpacity]: color === 'redOpacity',
        [styles.gray]: color === 'gray',
        [styles.lightGray]: color === 'lightGray',
        [styles.icon]: size === 'icon',
        [styles.circle]: size === 'circle',
        [styles.smart]: size === 'smart',
        [styles.border]: size === 'border',
        [styles.reviews]: size === 'reviews'
      })}
      {...props}
    >
      {icon}
      {img && <img src={img}></img>}
      <div  className={styles.children}>{children}</div>
     {quantity && <div className={styles.quantity}>{quantity}</div>}
    </button>
  )
}
