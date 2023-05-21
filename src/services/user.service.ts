import $api from '.';
import { createAsyncThunk } from '@reduxjs/toolkit';



import { IUser } from '../types/Auth';


/* users info */
export const usersInfo = async () => {
  try {
    const { data } = await $api.get(`/users/info`)
    return data as IUser
  } catch (error) {
   console.log(error);
   
  }
}
// export const usersInfo = createAsyncThunk<IUser>('users/info', async (user, thunkApi) => {
//   try {
//     console.log('usersInfo')
    
//     const { data } = await $api.get(`/users/info`)
//     return data as IUser
//   } catch (error) {
//     return thunkApi.rejectWithValue(error)
//   }
// })