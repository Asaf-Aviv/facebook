import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactGA from 'react-ga'
import { ThemeProvider } from 'styled-components'
import { Layout, WindowWidthProdiver } from 'components'
import theme from 'styles/theme'

const Facebook: React.FC = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <WindowWidthProdiver>
          <Layout />
        </WindowWidthProdiver>
      </ThemeProvider>
    </Router>
  )
}

export default hot(Facebook)
