import React, { FC, useEffect } from 'react'
<<<<<<< HEAD
import HomePage from '../src/components/screens/HomePage/HomePage'
=======
>>>>>>> 47427708402dcee8e06df6e79d27cc1e35ecaccb
import { useDispatch } from 'react-redux'

import HomePage from '@/src/components/screens/HomePage/HomePage'
import { setMoviesList } from '@/src/store/reducers/dataBaseReducer'

const Home: FC = () => {
  return (
    <>
      <HomePage />
    </>
  )

}

export default Home
