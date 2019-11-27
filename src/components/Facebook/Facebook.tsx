import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Layout, WindowWidthProdiver } from 'components'
import theme from 'styles/theme'

const Facebook: React.FC = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <WindowWidthProdiver>
        <Layout />
      </WindowWidthProdiver>
    </ThemeProvider>
  </Router>
)

export default hot(Facebook)
