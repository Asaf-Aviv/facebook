import { useLayoutEffect } from 'react'

const useLockBodyScroll = (lock = false) => {
  useLayoutEffect(() => {
    if (!lock) return

    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [lock])
}

export default useLockBodyScroll
