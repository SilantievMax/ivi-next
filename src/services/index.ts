import axios from 'axios'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../store/store'
import { LOCAL } from '../types/Auth'
import { getLocalStorage } from '../utils/local-storage'

import { logout } from './auth.service'

// const router = useRouter()
export const API_URL = process.env.AUTH_URL
const $api = axios.create({
  baseURL: API_URL
})

$api.interceptors.request.use(config => {
  if (getLocalStorage(LOCAL.TOKEN)) {
    config.headers.Authorization = `Bearer ${getLocalStorage(LOCAL.TOKEN)?.accessToken}`
    return config
  }
  return config
})
$api.interceptors.response.use(
  config => {
    return config
  },
  async error => {
    console.log('interceptors.error', error)
    const originalRequest = error.config
    if (error.response.status == 401) {
      try {
        const configRefersh = {
          headers: { Authorization: `Bearer ${getLocalStorage(LOCAL.TOKEN)?.refreshToken}` }
        }
        console.log('401', configRefersh, originalRequest)
        const { data } = await axios.get(`/auth/refresh`, configRefersh)
        console.log(data)
        localStorage.setItem(LOCAL.TOKEN, JSON.stringify(data))
        return $api.request(originalRequest)
      } catch (e) {
        const dispatch = useDispatch<AppDispatch>()
        console.log('Не авторизован')
        dispatch(logout())
      }
    }
  }
)

export default $api
