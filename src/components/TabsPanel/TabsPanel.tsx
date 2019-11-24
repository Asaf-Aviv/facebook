import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const TabsPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => () => setActiveTab(index)

  return (
    <TabsContainer>
      <StyledUl>
        <Tab onClick={handleTabClick(0)} active={activeTab === 0}>Posts</Tab>
        <Tab onClick={handleTabClick(1)} active={activeTab === 1}>Photos</Tab>
        <Tab onClick={handleTabClick(2)} active={activeTab === 2}>Video</Tab>
        <Tab onClick={handleTabClick(3)} active={activeTab === 3}>Communities</Tab>
        <Tab onClick={handleTabClick(4)} active={activeTab === 4}>Favourites</Tab>
        <Tab onClick={handleTabClick(5)} active={activeTab === 5}>Recommendations</Tab>
      </StyledUl>
    </TabsContainer>
  )
}

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const TabsContainer = styled.nav`
  flex: 1;
  margin: 1rem 0 2rem;
  @media screen and (min-width: 700px) {
    border-bottom: 2px solid #EBEBEB;
  }
  @media screen and (min-width: 1200px) {
    margin: 0 0 2rem 0rem;
  }
`

const Tab = styled.button<{ active: boolean }>`
  position: relative;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  opacity: 0.5;
  padding-bottom: 0.5rem;
  font-size: 16px;
  flex-basis: 100%;
  margin-bottom: 1rem;
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: transparent;
  }
  &:hover {
    opacity: 1;
  }
  ${({ active, theme }) => active && css`
    font-weight: 500;
    opacity: 1;
    &::after {
      background: ${theme.colors.bg.primary};
    }
  `}
  @media screen and (min-width: 400px) {
    flex-basis: 50%;
  }
  @media screen and (min-width: 550px) {
    flex-basis: 33%;
  }
  @media screen and (min-width: 700px) {
    padding-bottom: 1rem;
    font-size: 18px;
    margin-bottom: 0;
    margin-right: 1rem;
    flex-basis: initial;
  }
  @media screen and (min-width: 1200px) {
    margin-right: 2rem;
  }
`

export default TabsPanel
