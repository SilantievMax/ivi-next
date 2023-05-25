import { Oval } from 'react-loader-spinner'
import { useSelector } from 'react-redux'

import AdminPage from '../screens/AdminPage/AdminPage'

import styles from './withAuth.module.scss'
import Error from '@/pages/404'
import { isAdmin, isLoading } from '@/src/store/reducers/userReducers'

/** Обертка для зарегестрированных пользователей */
const withAuth = (Component: React.FC) => {
  const Auth = () => {
    const loading = useSelector(isLoading)
    const admin = useSelector(isAdmin)
    if (loading) {
      return <Oval wrapperClass={styles.loader} color='rgba(255, 255, 255, .72)' secondaryColor='red' />
    }
    if (!admin) {
      return <Error />
    }
    return <AdminPage />
  }
  return Auth
}

export default withAuth
