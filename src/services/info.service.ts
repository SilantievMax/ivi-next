import axios from 'axios';



import { IFilm, ITrailer } from '../types/types';


// axios.defaults.baseURL = process.env.INFO_URL
// console.log(process.env.NEXT_INFO_URL)

export const InfoService = {
  async getAll() {
    const data  = await axios.get('http://localhost:3003/info')
    return data
  }
}