import axios from 'axios'

import { IFilm, ITrailer } from '../types/types'

axios.defaults.baseURL = process.env.MOVIES_URL

export const MoviesService = {
  async getAll() {
    const { data } = await axios.get<IFilm[]>(`/movies/`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return data
  },
  async getById(id: number) {
    const { data } = await axios.get<IFilm>(`/movies/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  },
  async getSimilarById(id: number) {
    const { data } = await axios.get<IFilm[]>(`/movies/${id}/similar`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  },
  async getMoviesVideoById(id: number) {
    const { data } = await axios.get<ITrailer[]>(`/movies/${id}/videos`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  }
}
