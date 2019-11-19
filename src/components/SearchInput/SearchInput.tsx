import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'

const SearchInput: React.FC<{ autoFocus?: boolean }> = ({ autoFocus }) => {
  const [value, setValue] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <SearchInputContainer>
      <StyledSearchIcon />
      <Input
        value={value}
        onChange={handleOnChange}
        placeholder="Search for song, artist or an album"
        autoFocus={autoFocus}
      />
    </SearchInputContainer>
  )
}

const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 0.75rem;
  height: 1.25rem;
`

const Input = styled.input`
  flex: 1;
  background: transparent;
  color: #fff;
  padding-left: 2.75rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  height: 3rem;
  outline: none;
  &::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`

export default SearchInput
