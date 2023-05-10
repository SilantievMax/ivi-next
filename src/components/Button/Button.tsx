import cn from 'classnames'
import React from 'react'
import styles from './Button.module.scss'
import { ButtonProps } from './Button.props'

export const Button = ({
  disables,
  children,
  size,
  img,
  className,
  color,
  icon,
  quantity,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${cn(styles.button, className, {
        [styles.red]: color === 'red',
        [styles.gray]: color === 'gray',
        [styles.darkRed]: color === 'darkRed',
        [styles.gradient]: color === 'gradient',
        [styles.lightGray]: color === 'lightGray',
        [styles.redOpacity]: color === 'redOpacity',
        [styles.mainGray]: color === 'mainGray',
        [styles.mainBlueGradient]: color === 'mainBlueGradient',
        [styles.img]: size === "img",
        [styles.icon]: size === 'icon',
        [styles.smart]: size === 'smart',
        [styles.circle]: size === 'circle',
        [styles.border]: size === 'border',
        [styles.reviews]: size === 'reviews',
        [styles.comment]: size === 'comment',
        [styles.iconGoBack]: size === 'iconGoBack',
      })} ${disables && styles.disable}` }
      {...props}
    >
      {icon}
      {img && <div> <img src={img}></img></div>}
      <div  className={styles.children}>{children}</div>
     {quantity && <div className={styles.quantity}>{quantity}</div>}
    </button>
  )
}
