import { createSlice, current } from '@reduxjs/toolkit'

import { AppState } from '../store'

import { checkAuth, logout, signIn, signUp } from '@/src/services/auth.service'
import { IUser, LOCAL, valueRoles } from '@/src/types/Auth'
import { getLocalStorage } from '@/src/utils/local-storage'

export const selectIsAuth = () => false

export interface IUserAuth {
  user: IUser
  isLoading: boolean
  setAuth: boolean
  isAdmin: boolean
}

const initialState: IUserAuth = {
  user: getLocalStorage(LOCAL.USER) as IUser,
  isLoading: false,
  setAuth: false,
  isAdmin: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    /*signIn*/
    builder
      .addCase(signIn.pending, state => {
        state.isLoading = true
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user
        localStorage.setItem(LOCAL.TOKEN, JSON.stringify({ accessToken: payload.accessToken, refreshToken: payload.refreshToken }))
        localStorage.setItem(LOCAL.USER, JSON.stringify(payload.user))
        if (payload.user.roles.some(e => e.value === valueRoles.ADMIN)) {
          state.isAdmin = true
          localStorage.setItem(LOCAL.ADMIN, JSON.stringify(true))
        }
        state.setAuth = true
        state.isLoading = false
      })
      .addCase(signIn.rejected, state => {
        state.user = {} as IUser
        state.isLoading = false
      })
    /*signUp*/
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user
        localStorage.setItem(LOCAL.TOKEN, JSON.stringify({ accessToken: payload.accessToken, refreshToken: payload.refreshToken }))
        localStorage.setItem(LOCAL.USER, JSON.stringify(payload.user))
        if (payload.user.roles.some(e => e.value === valueRoles.ADMIN)) {
          state.isAdmin = true
          localStorage.setItem(LOCAL.ADMIN, JSON.stringify(true))
        }
        state.setAuth = true
        state.isLoading = false
      })
      .addCase(signUp.rejected, state => {
        state.user = {} as IUser
        state.isLoading = false
      })
    /*Logout*/
    builder.addCase(logout.fulfilled, state => {
      localStorage.removeItem(LOCAL.USER)
      localStorage.removeItem(LOCAL.TOKEN)
      localStorage.removeItem(LOCAL.ADMIN)
      state.setAuth = false
      state.isAdmin = false
      state.isLoading = false
    })
    /*checkAuth*/
    builder
      .addCase(checkAuth.pending, state => {
        state.isLoading = true
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        localStorage.setItem(LOCAL.TOKEN, JSON.stringify({ accessToken: payload.accessToken, refreshToken: payload.refreshToken }))
        if (getLocalStorage(LOCAL.ADMIN)) {
          state.isAdmin = true
        }
        state.setAuth = true
        state.isLoading = false
      })
      .addCase(checkAuth.rejected, state => {
        localStorage.removeItem(LOCAL.USER)
        localStorage.removeItem(LOCAL.ADMIN)
        localStorage.removeItem(LOCAL.TOKEN)
        state.user = {} as IUser
        state.isLoading = false
      })
  }
})

export const setAuth = (state: AppState) => state.user.setAuth
export const user = (state: AppState) => state.user.user
export const isLoading = (state: AppState) => state.user.isLoading
export const isAdmin = (state: AppState) => state.user.isAdmin
