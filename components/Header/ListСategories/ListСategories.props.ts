import { ReactNode } from 'react'

export interface ListCategoriesProps {
  variant?: 'tv' | 'profile' | 'muvies' | string
  children?: ReactNode
}
