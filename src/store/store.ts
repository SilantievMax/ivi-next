import { Action, ThunkAction, combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { authSlice } from '@/src/store/reducers/authReducer'
import { dataBaseSlice } from '@/src/store/reducers/dataBaseReducer'
import { filterSlice } from '@/src/store/reducers/filterReducer'
import { itemSlice } from '@/src/store/reducers/sortReducer'

const makeStore = () =>
  configureStore({
    reducer: {
      [itemSlice.name]: itemSlice.reducer,
      [filterSlice.name]: filterSlice.reducer,
      [dataBaseSlice.name]: dataBaseSlice.reducer,
      [authSlice.name]: authSlice.reducer
    },
    devTools: true
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
export const store = makeStore();
export const wrapper = createWrapper<AppStore>(makeStore)
