import React from 'react'
import { PopOverHeader, Typography } from 'shared'
import styled from 'styled-components'
import SearchInput from 'components/SearchInput'

const ToolBarSearch: React.FC = () => (
  <ToolBarSearchContainer>
    <PopOverHeader>
      <Typography as="h6" color="white" weight={500}>Search</Typography>
    </PopOverHeader>
    <SearchInputContainer>
      <SearchInput autoFocus />
    </SearchInputContainer>
  </ToolBarSearchContainer>
)

const ToolBarSearchContainer = styled.div`
  width: 500px;
  padding-bottom: 1.5rem;
`

const SearchInputContainer = styled.div`
  padding: 0 2rem;
`

export default ToolBarSearch
