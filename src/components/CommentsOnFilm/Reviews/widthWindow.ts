import { useEffect, useState } from 'react'

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 2 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 3 : window.innerWidth >= 1500 ? 4 : 1)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
