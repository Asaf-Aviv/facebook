import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import {
  SideBar,
  TabsPanel,
  CreatePost,
  Posts,
  Aside,
  ToolBar,
} from 'components'
import GlobalStyle from 'styles/GlobalStyle'
import theme from 'styles/theme'

const Facebook: React.FC = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Content>
        <GlobalStyle />
        <SideBar />
        <Router />
        <StyledDiv>
          <TabsPanel />
          <Content>
            <ContentWrapper>
              <CreatePost />
              <Posts />
            </ContentWrapper>
            <Aside />
          </Content>
        </StyledDiv>
        <ToolBar />
      </Content>
    </ThemeProvider>
  </Router>
)

const StyledDiv = styled.div`
  padding: 2rem 3rem 100px 2rem;
  flex: 1;
`

const Content = styled.div`
  display: flex;
`

const ContentWrapper = styled.div`
  flex: 1;
`

export default hot(Facebook)
