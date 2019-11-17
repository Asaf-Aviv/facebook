import React from 'react'
import styled from 'styled-components'
import { ReactComponent as NewsIcon } from 'assets/icons/news.svg'
import { ReactComponent as FacebookLogo } from 'assets/icons/facebook.svg'
import { ReactComponent as MessagesIcon } from 'assets/icons/messages.svg'
import { ReactComponent as UserIcon } from 'assets/icons/user.svg'
import { ReactComponent as UsersIcon } from 'assets/icons/users.svg'
import { ReactComponent as EventsIcon } from 'assets/icons/events.svg'
import { ReactComponent as PagesIcon } from 'assets/icons/pages.svg'
import { SideBarLink } from 'components'

const SideBar: React.FC = () => (
  <SideBarContainer>
    <StyledHeader>
      <FacebookLogo />
    </StyledHeader>
    <h6>Menu</h6>
    <nav>
      <ul>
        <SideBarLink to="/news" label="News" icon={NewsIcon} />
        <SideBarLink to="/messages" label="Messages" icon={MessagesIcon} badge={9} />
        <SideBarLink to="/friends" label="Friends" icon={UserIcon} />
        <SideBarLink to="/communities" label="Communities" icon={UsersIcon} />
        <SideBarLink to="/events" label="Events" icon={EventsIcon} />
        <SideBarLink to="/pages" label="Pages" icon={PagesIcon} />
      </ul>
    </nav>
  </SideBarContainer>
)

const StyledHeader = styled.header`
  margin-bottom: 2rem;
`

const SideBarContainer = styled.div`
  font-family: Raleway, sans-serif;
  position: sticky;
  top: 0;
  padding: 2rem 1.5rem 0 3rem;
  height: 100vh;
  width: 250px;
  background: #f2f2f5;
  box-shadow: inset -20px 0px 20px rgba(113, 113, 113, 0.075);
`

export default SideBar
