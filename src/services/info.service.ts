import axios from 'axios';
import { IFilm, ITrailer } from '../types/types';

axios.defaults.baseURL = process.env.INFO_URL

export const InfoService = {
  async getAll(limit: number, sort: { type: string, query: string }, rate: number, reviewAmount: number, genres: number[], countries: number[], year: string) {
    const {data}  = await axios.get(`/info?limit=${limit}&order=${sort.query}&minRating=${rate}&numRatings=${reviewAmount}&genres=${genres.toString()}&countries=${countries.toString()}&years=${
      year.split(' ')[0]
    }`)
    return data.rows as IFilm
  }
}