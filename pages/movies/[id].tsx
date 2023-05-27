import { GetStaticPaths, GetStaticProps } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import React from 'react';



import FilmPage from '@/src/components/screens/FilmPage/FilmPage';
import { IFilm } from '@/src/types/types';
import { MoviesService } from '@/src/services/movies.service';


interface Params extends NextParsedUrlQuery{
  id: string,
}

// export const getStaticProps: GetStaticProps = async () => {
//   const movie = MoviesService.getAll()

//   return {
//     props: { movie }
//   }
// }
//
// export const getStaticPaths: GetStaticPaths<Params> = async () =>  {
//   const res = await fetch('http://localhost:3003/info')
//   const data = await res.json() as {count: number, rows: IFilm[]}
//   console.log(data)
//   return {
//     paths: data.rows.map(el => ({
//       params: {id: el.id.toString()}
//     })),
//     fallback: true,
//   }
// }


const DetailedMoviePage = ({film}: {film: IFilm}) => {
  return (
    <FilmPage />
  )
}




export default DetailedMoviePage