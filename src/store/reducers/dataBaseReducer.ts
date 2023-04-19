import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'
import { IFilm } from '@/src/types/types'


export interface filterItem {
  moviesList: IFilm[]
  pickedMovie: IFilm
}

const initialState: filterItem = {
  moviesList: [],
  pickedMovie: {} as IFilm
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
    }
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


export const { setMoviesList, setPickedMovie } = dataBaseSlice.actions
export const selectMoviesList = (state: AppState) => state.db.moviesList
export const selectPickedMovie = (state: AppState) => state.db.pickedMovie
