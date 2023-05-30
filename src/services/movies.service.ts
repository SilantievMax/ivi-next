import axios from 'axios'

import { ICrew, IFilm, IGenre, ITrailer } from '../types/types'
import $api from '@/src/services/index'

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
  },
  async getGenres() {
    const {data} = await axios.get<IGenre[]>(`${process.env.MOVIES_URL}/movies/filters/genres`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  },
  async putGenres(genreObject: IGenre) {
    return await $api.put<IGenre>(`${process.env.MOVIES_URL}/movies/update/genre`, {
      id: genreObject.id,
      nameRu: genreObject.nameRu,
      nameEn: genreObject.nameEn
    })
  },

  async getCountries() {
    const {data} = await axios.get<IGenre[]>(`${process.env.MOVIES_URL}/movies/filters/countries`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data
  },

  async putCountries(countryObject: IGenre) {
    return await $api.put<IGenre>(`${process.env.MOVIES_URL}/movies/update/country`, {
      id: countryObject.id,
      nameRu: countryObject.nameRu,
      nameEn: countryObject.nameEn
    })
  },

  async putFilm(film: IGenre) {
    return await $api.put<IFilm>(`${process.env.MOVIES_URL}/movies/update/movie`, {
      id: film.id,
      nameRu: film.nameRu,
      nameEn: film.nameEn
    })
  },
}
