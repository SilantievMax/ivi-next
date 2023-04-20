export interface ILinks {
  title: string
  link: string
}

interface Genre {
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
  id: number,
  nameRu: string,
  nameEn: string,
  posterUrl: string,
  posterUrlPreview: string,
  coverUrl: string,
  ratingKinopoisk: number,
  ratingKinopoiskVoteCount: number,
  year: number,
  filmLength: number,
  slogan: string,
  description: string,
  shortDescription: string,
  type: string,
  ratingMpaa: string,
  ratingAgeLimits: string,
  startYear: number,
  endYear: number,
  serial: boolean,
  shortFilm: boolean,
  completed: boolean,
  genres: Genre[]
  countries: Genre[]
}
