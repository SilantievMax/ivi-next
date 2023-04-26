import axios from 'axios';
import { IFilm, ITrailer } from '../types/types';

axios.defaults.baseURL = process.env.INFO_URL

export const InfoService = {
  async getAll() {
    const {data}  = await axios.get('/info')
    return data.rows as IFilm
  }
}