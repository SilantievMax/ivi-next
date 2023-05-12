import { createSlice } from '@reduxjs/toolkit'

import { AppState } from '../store'

export const selectIsAuth = () => false

export interface IAuth {
  ipOpenAuth: boolean
}

const initialState: IAuth = {
  ipOpenAuth: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setOpenAuth: (state, action) => {
      state.ipOpenAuth = action.payload
    }
  }
})

// export const authReducer = authSlice.actions
export const { setOpenAuth } = authSlice.actions
export const selectIpOpenAuth = (state: AppState) => state.auth.ipOpenAuth
