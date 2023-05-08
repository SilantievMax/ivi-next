export interface IPerson {
  id: number
  nameEn: string
  nameRu: string
  posterUrl: string
  staffId: number
}

export interface IPersonMovies {
  filmLength: number
  id: number
  kinopoiskId: number
  nameEn: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  ratingKinopoisk: number
  ratingKinopoiskVoteCount: number
  type: string
  year: number
}

export interface IInfoPerson {
  movies: IPersonMovies[]
  person: IPerson
}