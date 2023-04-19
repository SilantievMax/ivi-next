import React, { FC, useEffect } from 'react'
import HomePage from '@/src/components/CommentsOnFilm/screens/HomePage/HomePage'
import { useDispatch } from 'react-redux'
import { setMoviesList } from '@/src/store/reducers/dataBaseReducer'

const Home: FC = () => {
  return(
  <HomePage/>
  )
}

export default Home
