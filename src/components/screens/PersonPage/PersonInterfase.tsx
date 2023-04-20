export interface IPerson {
  age: number
  birthday: string
  birthPlace: string
  death: string
  deathPlace: [
    {
      value: string
    }
  ]
  facts: [
    {
      value: string
    }
  ]
  films: IFilms[]
  growth: number
  hasAwards: number
  nameEn: string
  nameRu: string
  personId: number
  posterUrl: string
  profession: string
  sex: string
  webUrl: string
  spouses: {
    id: number
    name: 'string'
    divorced: true
    divorcedReason: 'string'
    sex: 'string'
    children: number
    relation: 'string'
  }
}

export interface IFilms {
  description: string
  filmId: number
  general: boolean
  nameEn: string
  nameRu: string
  professionKey: string
  rating: string
}
