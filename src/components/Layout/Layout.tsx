import React, { useContext } from 'react'
import styled from 'styled-components'
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
import { WindowWidthContext } from 'components/WindowWidthProvider'

const screenSizes = {
  SM: 600,
  MD: 786,
  LG: 1200,
}

const Layout: React.FC = () => {
  const width = useContext(WindowWidthContext)

  return (
    <>
      {width < screenSizes.LG && <NavBar />}
      <Flex>
        <GlobalStyle />
        {width >= screenSizes.LG && <SideBar />}
        <StyledDiv>
          <TabsPanel />
          <Flex>
            <ContentWrapper>
              <CreatePost />
              <Posts />
            </ContentWrapper>
            {width >= screenSizes.MD && <Aside />}
          </Flex>
        </StyledDiv>
        {width >= screenSizes.SM && <ToolBar />}
      </Flex>
    </>
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

const Flex = styled.div`
  display: flex;
`

const ContentWrapper = styled.div`
  flex: 2;
`

export default Layout
