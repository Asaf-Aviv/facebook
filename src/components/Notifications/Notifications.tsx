import React from 'react'
import styled, { css } from 'styled-components'
import { Avatar, Typography, PopOverHeader } from 'shared'

const Notifications: React.FC = () => (
  <NotificationsContainer>
    <PopOverHeader>
      <Typography as="h6" color="white" weight={500}>Notifications</Typography>
      <Typography as="span" color="lightBlue" size="sm" weight={500}>Settings</Typography>
    </PopOverHeader>
    <NotificationsList>
      {[...Array(4)].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Notification key={i}>
          <StyledAvatar
            src="https://randomuser.me/api/portraits/women/22.jpg"
            alt="women"
          />
          <div>
            <Typography color="white">
              Your friend
              {' '}
              <Typography as="span" color="lightBlue">Jane Clark</Typography>
              {' '}
              like your post
              {' '}
              <Typography as="span" color="lightBlue">Seven rules of good IT company</Typography>
            </Typography>
            <Typography as="span" size="xs" color="white" opacity={0.5}>2 hours ago</Typography>
          </div>
        </Notification>
      ))}
    </NotificationsList>
    <ViewAll>View all</ViewAll>
  </NotificationsContainer>
)

const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
`

const NotificationsList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`

const Notification = styled.li`
  flex: 25% 0;
  display: flex;
`

const StyledAvatar = styled(Avatar)`
  margin-right: 0.5rem;
  flex-shrink: 0;
`

const ViewAll = styled.span`
  ${(props) => {
    const { lightBlue } = props.theme.colors.text

    return css`
      cursor: pointer;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 150ms;
      color: ${lightBlue};
      border-top: 1px solid rgba(255, 255, 255, 0.07);
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `
  }};
`

export default Notifications
