import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'
import { IFilm, ITrailer } from '@/src/types/types'


export interface filterItem {
  moviesList: IFilm[]
  pickedMovie: IFilm
  pickedMovieTrailers: ITrailer[]
  pickedMovieSimilars: IFilm[]
  isLoading: boolean
}

const initialState: filterItem = {
  moviesList: [],
  pickedMovie: {} as IFilm,
  pickedMovieSimilars: [],
  pickedMovieTrailers: [],
  isLoading: false
}

export const dataBaseSlice = createSlice({
  name: 'db',
  initialState,
  reducers: {
    setMoviesList(state, action) {
      state.moviesList = action.payload
    },
    setPickedMovie(state, action) {
      state.pickedMovie = action.payload
    },
    setPickedMovieSimilars(state, action) {
      state.moviesList = action.payload
    },
    setPickedMovieTrailers(state, action) {
      state.pickedMovie = action.payload
    },
    setIsLoading(state, action) {
      state.pickedMovie = action.payload
    },
  },


  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.item
      }
    }
  }
})


export const { setMoviesList, setPickedMovie, setPickedMovieSimilars, setPickedMovieTrailers, setIsLoading } = dataBaseSlice.actions
export const selectMoviesList = (state: AppState) => state.db.moviesList
export const selectPickedMovie = (state: AppState) => state.db.pickedMovie
export const selectPickedMovieSimilars = (state: AppState) => state.db.pickedMovieSimilars
export const selectPickedMovieTrailers = (state: AppState) => state.db.pickedMovieTrailers
export const selectIsLoading = (state: AppState) => state.db.isLoading
