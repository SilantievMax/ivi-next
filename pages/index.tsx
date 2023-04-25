import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Authorization from '@/src/components/Authorization/Authorization'
import HomePage from '@/src/components/screens/HomePage/HomePage'
import { setMoviesList } from '@/src/store/reducers/dataBaseReducer'

const Home: FC = () => {
  return (
    <>
      <Authorization />
      <HomePage />
    </>
  )
}

export default Home
