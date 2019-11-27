import React, { createContext } from 'react'
import { useWindowWidth } from 'hooks'

export const WindowWidthContext = createContext(0)

const WindowWidthProdiver: React.FC = ({ children }) => {
  const width = useWindowWidth()

  return (
    <WindowWidthContext.Provider value={width}>
      {children}
    </WindowWidthContext.Provider>
  )
}

export default WindowWidthProdiver
