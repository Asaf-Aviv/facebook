import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = throttle(() => setWindowWidth(window.innerWidth), 50)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowWidth
}

export default useWindowWidth
