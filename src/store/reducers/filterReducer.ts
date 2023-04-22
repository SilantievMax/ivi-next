import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'
import { IGenre } from '@/src/types/types'


export interface filterItem {
  reviews: number
  rate: number
  genres: number[]
  countries: number[]
  pickedYear: string
}

const initialState: filterItem = {
  reviews: 0,
  rate: 0,
  countries: [],
  genres: [],
  pickedYear: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setReviewAmount(state, action) {
      state.reviews = action.payload
    },
    setRate(state, action) {
      state.rate = action.payload
    },
    setCountries(state, action) {
      state.countries = action.payload
    },
    setGenres(state, action) {
      state.genres = action.payload
    },
    setPickedYear(state, action) {
      state.pickedYear = action.payload
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


export const { setReviewAmount, setRate, setGenres, setCountries, setPickedYear } = filterSlice.actions
export const selectReviewAmount = (state: AppState) => state.filter.reviews
export const selectRate = (state: AppState) => state.filter.rate
export const selectGenres = (state: AppState) => state.filter.genres
export const selectCountries = (state: AppState) => state.filter.countries
export const selectPickedYear = (state: AppState) => state.filter.pickedYear
