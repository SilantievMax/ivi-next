import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';



import Error from './404';
import AdminPage from '@/src/components/screens/AdminPage/AdminPage';
// import withAuth from '@/src/components/withAuth/withAuth';
import { user } from '@/src/store/reducers/userReducers';
import { valueRoles } from '@/src/types/Auth';


const Admin: FC = () => {
  const use = useSelector(user)
  const isAdmin = use ? use.roles.some(e => e.value === valueRoles.ADMIN) : false
  console.log('Admin', isAdmin)
  
  if (!isAdmin) {    
    return <Error/>
  }
  return <AdminPage />
}
export default Admin

// export default withAuth(Admin)