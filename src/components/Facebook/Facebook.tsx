import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import SideBar from 'components/SideBar/SideBar'
import GlobalStyle from 'styles/GlobalStyle'
import theme from 'styles/theme'
import TabsPanel from 'components/TabsPanel/TabsPanel'
import CreatePost from 'components/CreatePost/CreatePost'
import Posts from 'components/Posts/Posts'
import Aside from 'components/Aside'
import BottomToolBar from 'components/BottomToolBar/BottomToolBar'
import 'simplebar/dist/simplebar.min.css'

const Facebook: React.FC = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <div>
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
        <BottomToolBar />
      </div>
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
