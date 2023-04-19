import { useEffect, useState } from 'react';


export default function useWindowSize(item:string) {
  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    function handleResize() {
      if (item === 'reviews') {
        setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 2 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 3 : window.innerWidth >= 1500 ? 4 : 1)
      } else if (item === 'movie') {
        setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 3 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 4 : window.innerWidth >= 1500 ? 6 : 2)
      } else {
        setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 2 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 3 : window.innerWidth >= 1500 ? 4 : 1)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
