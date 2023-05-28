import { type } from "os";

export interface ILinks {
  title: string
  link: string
}

export interface IGenre {
  id: number,
  nameRu: string,
  nameEn: string,
}

export interface ITrailer {
  id: number,
  name: string,
  site: string,
  url: string
}

export interface IFilm {
  id: number
  nameRu: string
  nameEn: string
  posterUrl: string
  kinopoiskId: number
  posterUrlPreview: string
  coverUrl: string
  ratingKinopoisk: number
  ratingKinopoiskVoteCount: number
  year: number
  filmLength: number
  slogan: string
  description: string
  shortDescription: string
  type: string
  ratingMpaa: string
  ratingAgeLimits: string
  startYear: number
  endYear: number
  serial: boolean
  shortFilm: boolean
  completed: boolean
  genres: IGenre[]
  countries: IGenre[]
}

interface IRoles {
  nameRu: string,
  nameEn: string
}
export interface ICrew {
  id: number,
  nameRu: string,
  nameEn: string,
  posterUrl: string,
  roles: IRoles[]
}

export type TypeFilm = {
  moviesList: IFilm
}