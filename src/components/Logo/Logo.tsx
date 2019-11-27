import React from 'react'
import { ReactComponent as FacebookLogo } from 'assets/icons/facebook.svg'
import { FakeLink } from 'components'
import styled from 'styled-components'

interface Props {
  size?: number
}

const Logo: React.FC<Props> = ({ size }) => (
  <FakeLink>
    <StyledLogo
      width={size}
      height={size}
    />
  </FakeLink>
)

const StyledLogo = styled(FacebookLogo)`
  display: block;
  flex-shrink: 0;
`

export default Logo
