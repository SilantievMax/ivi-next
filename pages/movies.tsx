import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import React from 'react'

import MoviesPage from '@/src/components/screens/Movies/MoviesPage'
import { InfoService } from '@/src/services/info.service'
import { IFilm, TypeFilm } from '@/src/types/types'

const Index: NextPage = () => {
  return <MoviesPage />
}

export default Index
