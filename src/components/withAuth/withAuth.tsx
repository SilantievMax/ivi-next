import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



import AdminPage from '../screens/AdminPage/AdminPage';
import HomePage from '../screens/HomePage/HomePage';



import { usersInfo } from '@/src/services/user.service';
import { setAuth, user } from '@/src/store/reducers/userReducers';
import { AppDispatch } from '@/src/store/store';
import { valueRoles } from '@/src/types/Auth';


/** Обертка для зарегестрированных пользователей */
const withAuth = (Component: React.FC) => {
  const Auth = () => {
    const use = useSelector(user)
    const isAdmin = use ? !use.roles.some(e => e.value === valueRoles.ADMIN) : true    
    console.log(use)
    console.log(isAdmin)
    
    if (isAdmin) {
      return <HomePage />
    }
    return <AdminPage />
  }
  return Auth
}

export default withAuth