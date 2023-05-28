import axios from 'axios'

import { ICrew, IFilm, ITrailer } from '../types/types'

axios.defaults.baseURL = process.env.MOVIES_URL

export const MoviesService = {
  async getAllActors(id: any) {
    const { data } = await axios.get<ICrew[]>(`${process.env.PERSON_URL}/persons/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  },

  async getAll() {
    const { data } = await axios.get<IFilm[]>(`/movies/`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  },
  async getMovieById(id: any) {
    const { data } = await axios.get<IFilm>(`${process.env.MOVIES_URL}/movies/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  },
  async getSimilarById(id: any) {
    const { data } = await axios.get<IFilm[]>(`${process.env.MOVIES_URL}/movies/${id}/similar`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  },
  async getVideoById(id: any) {
    const { data } = await axios.get<ITrailer[]>(`${process.env.MOVIES_URL}/movies/${id}/videos`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  }
}
