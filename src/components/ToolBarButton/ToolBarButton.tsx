import React from 'react'
import styled, { css } from 'styled-components'
import { IconButton, Badge } from 'shared'

interface Props {
  active: boolean
  className?: string
  badge?: number
  icon: React.FC
  onClick: () => void
}

const ToolBarButton: React.FC<Props> = ({
  active,
  className,
  badge,
  icon: Icon,
  onClick,
}) => (
  <ButtonContainer className={className}>
    <StyledToolBarButton onClick={onClick} active={active}>
      <Icon />
      {badge && <StyledBadge>{badge}</StyledBadge>}
    </StyledToolBarButton>
  </ButtonContainer>
)

const ButtonContainer = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  @media screen and (min-width: 1200px) {
    height: 70px;
    width: 70px;
  }
`

const StyledToolBarButton = styled(IconButton)<{ active: boolean }>`
  ${(props) => {
    const { active, theme } = props
    const { dark } = theme.colors.bg

    return css`
      ${active && css`
        background: ${dark};
        &:hover {
          background: ${dark};
        }
        g {
          opacity: 1;
        }
      `}
    `
  }}
`

const StyledBadge = styled(Badge)`
  position: absolute;
  bottom: 10px;
  right: 2px;
  height: 18px;
  width: 18px;
  font-size: 12px;
  padding-bottom: 0;
  @media screen and (min-width: 1200px) {
    bottom: 16px;
    right: 10px;
  }
`

export default ToolBarButton
