import { useEffect, useState } from 'react'

import { useThrottle } from '@/src/hooks/useThrottle'

export default function useWindowSize(item: 'reviews' | 'movie' | 'stringLength') {
  const [windowSize, setWindowSize] = useState(0)

  function handleResize() {
    switch (item) {
      case 'reviews':
        setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 2 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 2 : window.innerWidth >= 1500 ? 2 : 1)
        break
      case 'movie':
        setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 3 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 4 : window.innerWidth >= 1500 ? 6 : 2)
        break
      case 'stringLength':
        setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 70 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 150 : window.innerWidth >= 1500 ? 200 : 100)
        break
      default:
        setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 2 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 30 : window.innerWidth >= 1500 ? 4 : 10)
        break
    }
  }
  const thottleHandleResize = useThrottle(handleResize, 500)
  useEffect(() => {
    window.addEventListener('resize', thottleHandleResize)
    thottleHandleResize()

    return () => window.removeEventListener('resize', thottleHandleResize)
  }, [])
  return windowSize
}
