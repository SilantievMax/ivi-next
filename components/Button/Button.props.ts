import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';


export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode
  img?: any
  size?: 'circle' | 'smart' | "img" | 'icon'
  icon?: JSX.Element
  color?: 'red' | 'gradient' | 'gray' | 'redOpacity' | 'icon'
}