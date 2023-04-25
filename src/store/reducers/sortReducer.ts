import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'


export interface sortItem {
  sort: { type: string, query: string }
}

const initialState: sortItem = {
  sort: { type: 'sortByAmount', query: 'ratingKinopoiskVoteCount-ASC' }
}

export const itemSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action) {
      state.sort = action.payload
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


export const { setSort } = itemSlice.actions
export const selectSort = (state: AppState) => state.sort.sort

