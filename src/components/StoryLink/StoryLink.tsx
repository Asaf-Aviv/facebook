
import React from 'react'
import styled from 'styled-components'
import { Avatar } from 'shared'
import FakeLink from 'components/FakeLink'

const StoryLink: React.FC = () => (
  <FakeLink>
    <UserAvatarWrapper>
      <Avatar
        src="https://randomuser.me/api/portraits/women/22.jpg"
        alt="women"
      />
    </UserAvatarWrapper>
  </FakeLink>
)

const UserAvatarWrapper = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.colors.bg.secondary};
`

export default StoryLink
