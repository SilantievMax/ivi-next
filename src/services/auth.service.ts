import $api from '.';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



import { IAuthResponse, IUser, LOCAL } from '../types/Auth';
import { getLocalStorage } from '../utils/local-storage';


axios.defaults.baseURL = process.env.AUTH_URL
const configRefersh = {
  headers: { Authorization: `Bearer ${getLocalStorage(LOCAL.TOKEN)?.refreshToken}` }
}

/* Login */
export const signIn = createAsyncThunk<IAuthResponse, IUser>('auth/signIn', async (user, thunkApi) => {
  try {
    const { data } = await $api.post(`/auth/signin`, user)
    return data
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})

/* Registration */
export const signUp = createAsyncThunk<IAuthResponse, IUser>('auth/signUp', async (user, thunkApi) => {
  try {
    const { data } = await $api.post(`/auth/signup`, user)
    return data
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})

/* Logout */
export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await $api.get(`/auth/logout`)
  } catch (error) {}
})

/* checkAuth */
export const checkAuth = createAsyncThunk<IAuthResponse>('auth/checkAuth', async (user, thunkApi) => {
  console.log(configRefersh)

  try {
    console.log('checkAuth', configRefersh)
    const { data } = await axios.get(`/auth/refresh`, configRefersh)
    return data
  } catch (error) {
    console.log('checkAuth=error')
    return thunkApi.rejectWithValue(error)
  }
})
/* vk */
export const vkAuth = createAsyncThunk<IAuthResponse>('auth/vkAuth', async (user, thunkApi) => {
  try {
    console.log('checkAuth', configRefersh)
    const { data } = await $api.get(`/auth/vk`)
    return data
  } catch (error) {
    console.log('checkAuth=error')
    return thunkApi.rejectWithValue(error)
  }
})
/* google */
export const googleAuth = createAsyncThunk<IAuthResponse>('auth/googleAuth', async (user, thunkApi) => {
  try {
    console.log('checkAuth', configRefersh)
    const { data } = await $api.get(`/auth/google`)
    return data
  } catch (error) {
    console.log('checkAuth=error')
    return thunkApi.rejectWithValue(error)
  }
})