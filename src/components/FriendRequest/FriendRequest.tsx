import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Avatar, BaseButton, Button } from 'shared'
import { ReactComponent as DotsIcon } from 'assets/icons/dots.svg'
import FakeLink from 'components/FakeLink'
import { useOnOutsideClick } from 'hooks'

const FriendRequest: React.FC = () => {
  const [isActionPanelOpen, setIsActionPanelOpen] = useState(false)

  const actionsPanelRef = useRef(null)

  const toggleActionPanel = () => setIsActionPanelOpen(prevState => !prevState)

  useOnOutsideClick(actionsPanelRef, () => {
    if (isActionPanelOpen) {
      setIsActionPanelOpen(false)
    }
  })

  return (
    <FriendRequestContainer>
      <Avatar
        src="https://randomuser.me/api/portraits/women/22.jpg"
        alt="women"
      />
      <FriendRequestUserInfo>
        <FakeLink>
          <UserName>Jane Clark</UserName>
        </FakeLink>
        <LightText>Google</LightText>
      </FriendRequestUserInfo>
      <ActionsPanelContainer>
        <DotsButton onClick={toggleActionPanel}>
          <DotsIcon />
        </DotsButton>
        {isActionPanelOpen && (
          <FriendRequestActions ref={actionsPanelRef}>
            <Button onClick={toggleActionPanel} variant="success">Accept</Button>
            <Button onClick={toggleActionPanel} variant="error">Block</Button>
            <Button onClick={toggleActionPanel}>Ignore</Button>
          </FriendRequestActions>
        )}
      </ActionsPanelContainer>
    </FriendRequestContainer>
  )
}

const DotsButton = styled(BaseButton)`
  width: 28px;
  height: 28px;
`

const FriendRequestContainer = styled.li`
  display: flex;
  align-items: center;
  &:not(:first-of-type) {
    margin-top: 1rem;
  }
`

const FriendRequestUserInfo = styled.div`
  margin-left: 1rem;
  flex: 1;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const UserName = styled.span`
  display: block;
  font-weight: 600;
`

const LightText = styled.span`
  font-size: 13px;
  opacity: 0.5;
`

const ActionsPanelContainer = styled.div`
  position: relative;
`

const FriendRequestActions = styled.div`
  ${(props) => {
    const { borderRadius, shadows, colors } = props.theme

    return css`
      position: absolute;
      right: 0;
      padding: 1rem;
      z-index: 1;
      display: flex;
      background: #FFF;
      border-radius: ${borderRadius};
      background: ${colors.bg.primary};
      box-shadow: ${shadows[0]};
      & ${Button} {
        flex: 1;
        &:nth-of-type(2) {
          margin: 0 0.75rem;
        }
      }
    `
  }};

`

export default FriendRequest
