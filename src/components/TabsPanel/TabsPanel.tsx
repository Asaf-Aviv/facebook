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
  border-bottom: 2px solid #EBEBEB;
  margin-bottom: 2rem;
`

const Tab = styled.button<{ active: boolean }>`
  position: relative;
  cursor: pointer;
  font-size: 18px;
  background: transparent;
  border: none;
  padding-bottom: 1rem;
  margin-right: 2rem;
  outline: none;
  opacity: 0.5;
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
`

export default TabsPanel
