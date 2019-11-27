import React, {
  useState,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg'
import { Nav, Notifications, Logo } from 'components'
import { useOnOutsideClick } from 'hooks'
import { BaseButton } from 'shared'
import { WindowWidthContext } from 'components/WindowWidthProvider'

const toggleState = (
  stateUpdater: Dispatch<SetStateAction<boolean>>,
) => () => stateUpdater(prevState => !prevState)

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const windowWidth = useContext(WindowWidthContext)
  const notificationsContainer = useRef<HTMLDivElement>(null)

  useOnOutsideClick(notificationsContainer, () => {
    if (isNotificationsOpen) toggleState(setIsNotificationsOpen)()
  })

  useEffect(() => {
    if (isOpen && windowWidth >= 870) {
      setIsOpen(false)
    }
  }, [windowWidth, isOpen])

  return (
    <NavBarContainer>
      <Logo size={36} />
      {windowWidth < 870 && (
        <>
          <NotificationsContainer ref={notificationsContainer}>
            <NotificationsButton
              active={isNotificationsOpen}
              onClick={toggleState(setIsNotificationsOpen)}
            >
              <BellIcon />
            </NotificationsButton>
            {isNotificationsOpen && <StyledNotifications />}
          </NotificationsContainer>
          <MenuButton onClick={toggleState(setIsOpen)}>
            <MenuIcon width={36} height={36} />
          </MenuButton>
        </>
      )}
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavBarContainer>
  )
}

const NotificationsContainer = styled.div`
  position: relative;
  margin: 0 1rem 0 auto;

`

const NotificationsButton = styled(BaseButton)<{ active: boolean }>`
  ${(props) => {
    const { active, theme } = props
    const { dark } = theme.colors.bg

    return css`
      height: 50px;
      width: 50px;
      path {
        fill: ${dark};
        stroke: ${dark};
      }
      ${active && css`
        background: ${dark};
        g {
          opacity: 1;
        }
        path {
          fill: #FFF;
          stroke: #FFF;
        }
      `};
    `
  }};
`

const StyledNotifications = styled(Notifications)`
  position: absolute;
  right: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 0px 10px 30px 2px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 485px) {
    width: 100vw;
    right: -68px;
  }
`

const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  background: #FFF;
  padding: 0 1rem;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 1000;
  box-shadow: 
    0 2px 0 rgba(0, 0, 0, 0.1),
    0 0 5px rgba(0, 0, 0, 0.05),
    0 1px 10px rgba(0, 0, 0, 0.03);
`

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
`

export default NavBar
