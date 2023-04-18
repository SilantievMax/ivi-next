import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { itemSlice } from '@/src/store/reducers/sortReducer'
import { filterSlice } from '@/src/store/reducers/filterReducer'

const makeStore = () =>
  configureStore({
    reducer: {
      [itemSlice.name]: itemSlice.reducer,
      [filterSlice.name]: filterSlice.reducer
    },
    devTools: true
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)
