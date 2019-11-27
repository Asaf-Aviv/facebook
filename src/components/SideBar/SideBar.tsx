import React from 'react'
import styled from 'styled-components'
import { Nav, Logo } from 'components'

const SideBar: React.FC = () => (
  <SideBarContainer>
    <StyledHeader>
      <Logo size={64} />
    </StyledHeader>
    <h6>Menu</h6>
    <Nav />
  </SideBarContainer>
)

const StyledHeader = styled.header`
  margin-bottom: 2rem;
`

const SideBarContainer = styled.div`
  font-family: Raleway, sans-serif;
  position: sticky;
  top: 0;
  padding: 2rem 1.5rem 0 3rem;
  height: 100vh;
  width: 250px;
  background: #f2f2f5;
  box-shadow: inset -20px 0px 20px rgba(113, 113, 113, 0.075);
`

export default SideBar
