import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  to?: string
  handleClick?(): void
}

const FakeLink: React.FC<Props> = ({ children, to = '', handleClick }) => (
  <StyledLink to={to} onClick={handleClick}>
    {children}
  </StyledLink>
)

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:visited {
    color: initial;
  }
`

export default FakeLink
