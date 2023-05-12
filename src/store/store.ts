import { Action, ThunkAction, combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { itemSlice } from '@/src/store/reducers/sortReducer'
import { filterSlice } from '@/src/store/reducers/filterReducer'
import { dataBaseSlice } from '@/src/store/reducers/dataBaseReducer'

const makeStore = () =>
  configureStore({
    reducer: {
      [itemSlice.name]: itemSlice.reducer,
      [filterSlice.name]: filterSlice.reducer,
      [dataBaseSlice.name]: dataBaseSlice.reducer
    },
    devTools: true
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
export const store = makeStore();
export const wrapper = createWrapper<AppStore>(makeStore)
