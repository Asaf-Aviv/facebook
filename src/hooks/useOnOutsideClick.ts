import { useEffect } from 'react'

const useOnOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node)) return
      callback()
    }

    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [ref, callback])
}

export default useOnOutsideClick
