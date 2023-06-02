import $api from '.'

import { IUser } from '../types/Auth'

export const COMMENT_URL = process.env.COMMENT_URL
export const AUTH_URL = process.env.AUTH_URL

/* users info */
export const usersInfo = async () => {
  try {
    const { data } = await $api.get(`${AUTH_URL}/users/info`)
    return data as IUser
  } catch (error) {
    console.log(error)
  }
}
