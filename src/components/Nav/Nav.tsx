import React, { useRef, useContext } from 'react'
import { ReactComponent as NewsIcon } from 'assets/icons/news.svg'
import { ReactComponent as MessagesIcon } from 'assets/icons/messages.svg'
import { ReactComponent as UserIcon } from 'assets/icons/user.svg'
import { ReactComponent as UsersIcon } from 'assets/icons/users.svg'
import { ReactComponent as EventsIcon } from 'assets/icons/events.svg'
import { ReactComponent as PagesIcon } from 'assets/icons/pages.svg'
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg'
import { NavLink, FakeLink } from 'components'
import styled from 'styled-components'
import { WindowWidthContext } from 'components/WindowWidthProvider'
import { useLockBodyScroll } from 'hooks'

interface Nav {
  isOpen?: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav: React.FC<Nav> = ({ isOpen, setIsOpen }) => {
  const ulRef = useRef<HTMLUListElement>(null)
  const windowWidth = useContext(WindowWidthContext)
  useLockBodyScroll(isOpen)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (isOpen && setIsOpen && e.target !== ulRef.current) {
      setIsOpen(false)
    }
  }

  return (
    <StyledNav isOpen={isOpen} onClick={handleClick}>
      <StyledUl ref={ulRef}>
        {windowWidth < 870 && (
          <LogoWrapper>
            <FakeLink>
              <FacebookIcon />
            </FakeLink>
          </LogoWrapper>
        )}
        <StyledNavLink to="/news" label="News" icon={NewsIcon} />
        <StyledNavLink to="/messages" label="Messages" icon={MessagesIcon} badge={9} />
        <StyledNavLink to="/friends" label="Friends" icon={UserIcon} />
        <StyledNavLink to="/communities" label="Communities" icon={UsersIcon} />
        <StyledNavLink to="/events" label="Events" icon={EventsIcon} />
        <StyledNavLink to="/pages" label="Pages" icon={PagesIcon} />
      </StyledUl>
    </StyledNav>
  )
}

const LogoWrapper = styled.div`
  margin: 3rem 0;
`

const StyledNavLink = styled(NavLink)`
  @media screen and (min-width: 870px) and (max-width: 1199px) {
    margin-left: 1.5rem;
  }
`

const StyledNav = styled.nav<{ isOpen?: boolean }>`
  flex: 1;
  @media screen and (max-width: 869px) {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    transition: transform 250ms;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    z-index: 100;
    transform: translateX(-100%);
    ${props => props.isOpen && `
      transform: translateX(0);
    `};
  }
`

const StyledUl = styled.ul`
  cursor: default;
  display: flex;
  flex-direction: column;
  width: 70vw;
  background: #FFF;
  height: 100vh;
  padding: 0 1rem;
  @media screen and (min-width: 870px) {
    padding: 0;
    background: transparent;
    height: auto;
    width: auto;
  }
  @media screen and (min-width: 600px) and (max-width: 869px) {
    width: 40vw;
  }
  @media screen and (min-width: 870px) and (max-width: 1199px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`

export default Nav
