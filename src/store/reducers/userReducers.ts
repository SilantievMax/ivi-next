import { createSlice, current } from '@reduxjs/toolkit';



import { AppState } from '../store';



import { checkAuth, logout, signIn, signUp } from '@/src/services/auth.service';
import { IUser, LOCAL } from '@/src/types/Auth';
import { getLocalStorage } from '@/src/utils/local-storage';


export const selectIsAuth = () => false

export interface IUserAuth {
  user: IUser
  isLoading: boolean
  setAuth: boolean
}

const initialState: IUserAuth = {
  user: getLocalStorage(LOCAL.USER) as IUser,
  isLoading: false,
  setAuth: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    /*signIn*/
      .addCase(signIn.pending, state => {
        state.isLoading = true
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.setAuth = true
        state.user = payload.user
        localStorage.setItem(LOCAL.TOKEN, JSON.stringify({ accessToken: payload.accessToken, refreshToken: payload.refreshToken }))
        localStorage.setItem(LOCAL.USER, JSON.stringify(payload.user))
      })
      .addCase(signIn.rejected, state => {
        state.isLoading = false
        state.user = {} as IUser
      })
    /*signUp*/
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.setAuth = true
        state.user = payload.user
        localStorage.setItem(LOCAL.TOKEN, JSON.stringify({ accessToken: payload.accessToken, refreshToken: payload.refreshToken }))
        localStorage.setItem(LOCAL.USER, JSON.stringify(payload.user))
      })
      .addCase(signUp.rejected, state => {
        state.isLoading = false
        state.user = {} as IUser
      })
    /*Logout*/
    builder.addCase(logout.fulfilled, state => {
      state.isLoading = false
      state.setAuth = false
      localStorage.removeItem(LOCAL.USER)
      localStorage.removeItem(LOCAL.TOKEN)
    })
    /*checkAuth*/
    builder
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.setAuth = true
        localStorage.setItem(LOCAL.TOKEN, JSON.stringify({ accessToken: payload.accessToken, refreshToken: payload.refreshToken }))
      })
      .addCase(checkAuth.rejected, state => {
        state.isLoading = false
        localStorage.removeItem(LOCAL.USER)
        localStorage.removeItem(LOCAL.TOKEN)
      })
    /*users info*/
    // builder
    //   .addCase(usersInfo.fulfilled, (state, { payload }) => {
    //     // console.log('.addCase(checkAuth)', payload)
    //     // localStorage.removeItem('user')
    //     console.log(payload);

    //     state.user = payload
    //     state.isLoading = false
    //     state.setAuth = true
    //     // localStorage.setItem('user', JSON.stringify(payload))
    //     // console.log('.addCase(checkAuth)localStorage', localStorage.getItem('user'))
    //   })
    //   .addCase(usersInfo.rejected, state => {
    //     // console.log('.addCase(checkAuth)', '112')
    //     // state.isLoading = false
    //     // localStorage.removeItem('user')
    //   })
  }
})

// export const authReducer = authSlice.actions
// export const {} = authSlice.actions
export const setAuth = (state: AppState) => state.user.setAuth
export const user = (state: AppState) => state.user.user
export const isLoading = (state: AppState) => state.user.isLoading