import $api from '..'
import axios from 'axios'
import { IFilm } from '@/src/types/types'
import { IReviews } from '@/src/types/CommentsType'

export const COMMENT_URL = process.env.COMMENT_URL
export const AUTH_URL = process.env.AUTH_URL
export interface IAxiosRequestConfigComent {
  method: string
  url: string
  headers: {}
  data: string 
}
export const addedComent = async (requestOptions: IAxiosRequestConfigComent) => {
  try {
    await $api(requestOptions)
  } catch (error) {
    console.log(error)
  }
}

export const CommentsService = {
  async loadFilmComments(id: any) {
    const { data } = await axios.get<IReviews[]>(`${COMMENT_URL}/comments/${id}/tree`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  },
}
