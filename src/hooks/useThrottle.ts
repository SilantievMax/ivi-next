import { useCallback, useRef } from 'react'

export function useThrottle(callback: () => void, delay: number) {
  const isThrottled = useRef(false)

  const throttledCollback = useCallback(() => {
    if (isThrottled.current) {
      return
    }
    callback()
    isThrottled.current = true
    setTimeout(() => (isThrottled.current = false), delay)
  }, [callback, delay])
  return throttledCollback
}
