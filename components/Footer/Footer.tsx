import React, { FC, useEffect } from 'react'

const Footer: FC = () => {
useEffect(() => {
  fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
    method: 'GET',
    headers: {
      'X-API-KEY': '9867f920-35d0-4b28-b36a-2f5e7d5100f1',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}, [])


  return <footer>Footer</footer>
}

export default Footer
