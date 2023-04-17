import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'


export interface filterItem {
  reviews: number
  rate: number
}

const initialState: filterItem = {
  reviews: 0,
  rate: 0
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


export const { setReviewAmount, setRate } = filterSlice.actions
export const selectReviewAmount = (state: AppState) => state.filter.reviews
export const selectRate = (state: AppState) => state.filter.rate

