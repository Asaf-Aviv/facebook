import styled from 'styled-components'
import BaseButton from './BaseButton'

const IconButton = styled(BaseButton)`
  height: 50px;
  width: 50px;
  @media screen and (min-width: 1200px) {
    height: 70px;
    width: 70px;
  }
  g {
    transition: opacity 150ms ease-out;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    g {
      opacity: 1;
    }
  }
`

export default IconButton
