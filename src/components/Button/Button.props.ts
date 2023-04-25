import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';


export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode
  img?: any
  size?: 'circle' | 'smart' | 'img' | 'icon' | 'border' | 'reviews' | 'comment' | 'iconGoBack'
  icon?: JSX.Element
  color?: 'red' | 'gradient' | 'gray' | 'lightGray' | 'redOpacity' | 'icon' | 'darkRed'
  quantity?: number
  disables?: boolean
}