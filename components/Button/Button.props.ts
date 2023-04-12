import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";


export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode
  img?: string
  size?: 'sm' | 'b' | 'img'

  color?: 'red' | 'gradient' | 'gray' | 'redOpacity' | 'icon'
}