import React, { ReactNode, useEffect, useState } from 'react'
import styles from './filter.module.scss'
import { TextField, ThemeProvider } from '@mui/material'
import Link from 'next/link'
import { createTheme } from '@mui/material/styles'
import { useOuside } from '@/src/hooks/useOutside'



interface IFilter {

  type : string,
}
const SearchItem = ({ type }: IFilter) => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: 'rgba(255, 255, 255, 0.56);'
      }
    }
  })
  const [value, setValue] = useState<string>('')
  const [searchResult, setSearchResult] = useState<string[]>([])
  const { ref, isShow, setIsShow } = useOuside(false)

  useEffect(() => {
    if (value.length !== 0) {
      fetch(`http://localhost:3005/persons/${type}?keywords=${value}&page=1&limit=10`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(json => setSearchResult(json))
        .catch(err => console.log(err))
    }
  }, [value])

  return (
    <div ref={ref}>
      <ThemeProvider theme={theme}>
        <TextField color='secondary'
                   id='standard-basic' label={type === 'actors' ? 'Поиск по актёру' : 'Поиск по Режиссёру'}
                   onClick={() => setIsShow(true)}
                   value={value}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                   variant='standard' />
        {isShow && value.length !== 0 ? <div className={type === 'actors' ? `${styles.searchResContainer}` : `${styles.searchResContainer} ${styles.dir}`}>{searchResult.map((el: any, idx) => <Link
          href={`person/${el.id}`} key={idx}>{el.nameRu}</Link>)}</div> : ''}
      </ThemeProvider>
    </div>
  )
}

export default SearchItem