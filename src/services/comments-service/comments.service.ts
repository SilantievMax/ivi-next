import $api from '..'

export const COMMENT_URL = process.env.COMMENT_URL
export const AUTH_URL = process.env.AUTH_URL
export interface IAxiosRequestConfigComent {
  method: string
  url: string
  headers: {}
  data: string 
}
export const addedComent = async (requestOptions: IAxiosRequestConfigComent) => {
  try {
    await $api(requestOptions)
  } catch (error) {
    console.log(error)
  }
}
