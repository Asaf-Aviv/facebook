import React, { createContext } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import {
  NavBar,
  SideBar,
  TabsPanel,
  CreatePost,
  Posts,
  Aside,
  ToolBar,
} from 'components'
import GlobalStyle from 'styles/GlobalStyle'
import theme from 'styles/theme'
import { useWindowWidth } from 'hooks'

const screenSizes = {
  MD: 1200,
}

export const WindowWidthContext = createContext(0)

const Facebook: React.FC = () => {
  const width = useWindowWidth()

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <WindowWidthContext.Provider value={width}>
          {width < screenSizes.MD && <NavBar />}
          <Content>
            <GlobalStyle />
            {width >= screenSizes.MD && <SideBar />}
            <StyledDiv>
              <TabsPanel />
              <Content>
                <ContentWrapper>
                  <CreatePost />
                  <Posts />
                </ContentWrapper>
                {width >= 786 && <Aside />}
              </Content>
            </StyledDiv>
            {width >= 600 && <ToolBar />}
          </Content>
        </WindowWidthContext.Provider>
      </ThemeProvider>
    </Router>
  )
}

const StyledDiv = styled.div`
  padding: 1rem 1rem 0;
  flex: 1;
  @media screen and (min-width: 600px) {
    padding-bottom: 3rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem 3rem 5rem 2rem;
  }
`

const Content = styled.div`
  display: flex;
`

const ContentWrapper = styled.div`
  flex: 2;
`

export default hot(Facebook)
