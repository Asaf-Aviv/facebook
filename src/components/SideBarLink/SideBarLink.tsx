import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { LabelLink, Badge } from 'shared'

interface SideBarLink {
  to: string
  label: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  badge?: number
}

const SideBarLink: React.FC<SideBarLink> = ({
  to,
  label,
  icon: Icon,
  badge,
}) => (
  <li>
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

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 50px;
  &:hover ${LabelLink}, &.active ${LabelLink} {
    opacity: 1;
  }
  &.active ${LabelLink} {
    font-weight: 600;
  }
`

const IconWrapper = styled.div`
  width: 2rem;
  display: flex;
  align-items: center;
`

const StyledBadge = styled(Badge)`
  margin-left: auto;
`

export default SideBarLink
