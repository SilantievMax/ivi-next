import { FieldErrors, UseFormRegister } from "react-hook-form";


export interface IReviews {
  author: string
  createdAt: string
  date: string
  description: string
  id: number
  movieId: number
  repliedOnComment: string
  replies: IReviews[]
  title: string
  type: string
  updatedAt: string
  userId: number
}
export interface IInputs {
  type?: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE'
  title?: string
  description?: string
  repliedOnComment?: number
}
export interface IReviewsInput {
  placeholder?: string
  register: UseFormRegister<IInputs>
  errors: FieldErrors<IInputs>
}