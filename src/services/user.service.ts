import $api from '.';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';



import { IUser } from '../types/Auth';


export const COMMENT_URL = process.env.COMMENT_URL
export const AUTH_URL = process.env.AUTH_URL

/* users info */
export const usersInfo = async () => {
  try {
    const { data } = await $api.get(`${AUTH_URL}/users/info`)
    return data as IUser
  } catch (error) {
   console.log(error);
   
  }
}
// /* added coment */
// export const addedComent = async (requestOptions: {
//   method: string
//   url: string
//   headers: {
//     'Content-Type': string
//   }
//   data: string
// }) => {
//   try {
//     console.log('movieId', requestOptions)
//     // await $api(`${COMMENT_URL}/comments/${movieId}`, requestOptions)
//     await $api(requestOptions)
//     // return data as IUser
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const usersInfo = createAsyncThunk<IUser>('users/info', async (user, thunkApi) => {
//   try {
//     console.log('usersInfo')
    
//     const { data } = await $api.get(`/users/info`)
//     return data as IUser
//   } catch (error) {
//     return thunkApi.rejectWithValue(error)
//   }
// })