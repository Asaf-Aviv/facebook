import React from 'react'
import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { LabelLink, Badge } from 'shared'

interface Props {
  to: string
  label: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  badge?: number
  className?: string
}

const NavLink: React.FC<Props> = ({
  to,
  label,
  icon: Icon,
  badge,
  className,
}) => (
  <li className={className}>
    <StyledNavLink to={to}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <LabelLink>
        {label}
      </LabelLink>
      {badge && <StyledBadge>{badge}</StyledBadge>}
    </StyledNavLink>
  </li>
)

const StyledNavLink = styled(RouterNavLink)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 50px;
  & ${LabelLink} {
    margin-left: 0.5rem;
  }
  &:hover ${LabelLink} {
    opacity: 1;
  }
  &.active ${LabelLink} {
    font-weight: 600;
    opacity: 1;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 869px) {
    width: 1.5rem;
  }
  @media screen and (min-width: 1200px) {
    width: 1.5rem;
  }
`

const StyledBadge = styled(Badge)`
  margin-left: 1rem;
`

export default NavLink
