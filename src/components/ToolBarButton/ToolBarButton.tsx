import React from 'react'
import styled, { css } from 'styled-components'
import BaseButton from 'shared/BaseButton'
import Badge from 'shared/Badge'

interface ToolBarButton {
  active: boolean
  className?: string
  badge?: number
  icon: React.FC
  onClick: () => void
}

const ToolBarButton: React.FC<ToolBarButton> = ({
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
  height: 70px;
  width: 70px;
`

const StyledToolBarButton = styled(BaseButton)<{ active: boolean }>`
  ${(props) => {
    const { active, theme } = props
    const { dark } = theme.colors.bg

    return css`
      height: 100%;
      width: 100%;
      ${active ? css`
        background: ${dark};
        g {
          opacity: 1;
        }
      ` : css`
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `}
    `
  }}
`

const StyledBadge = styled(Badge)`
  position: absolute;
  bottom: 16px;
  right: 10px;
  height: 18px;
  width: 18px;
  font-size: 12px;
  padding-bottom: 0;
`

export default ToolBarButton
