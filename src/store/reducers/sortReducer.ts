import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'


export interface sortItem {
  sort: string
}

const initialState: sortItem = {
  sort: 'По количеству оценок'
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

