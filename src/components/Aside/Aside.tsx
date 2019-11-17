import React from 'react'
import styled from 'styled-components'
import { BaseButton, Avatar, Paper } from 'shared'
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg'
import { ReactComponent as DotsIcon } from 'assets/icons/dots.svg'
import GoogleEvent from 'assets/images/google-event.jpg'

const Aside: React.FC = () => (
  <AsideContainer>
    <Paper>
      <Section>
        <h6>Stories</h6>
        <FlexSpaceBetween>
          <AddStoryButton>
            <PlusIcon />
          </AddStoryButton>
          <div>
            <UserAvatarWrapper>
              <Avatar
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="women"
              />
            </UserAvatarWrapper>
          </div>
          <div>
            <UserAvatarWrapper>
              <Avatar
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="women"
              />
            </UserAvatarWrapper>
          </div>
          <div>
            <UserAvatarWrapper>
              <Avatar
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="women"
              />
            </UserAvatarWrapper>
          </div>
        </FlexSpaceBetween>
      </Section>
      <Section>
        <FlexSpaceBetween>
          <h6>Upcoming Events</h6>
          <StyledLink>All</StyledLink>
        </FlexSpaceBetween>
        <img
          style={{ maxWidth: '100%' }}
          src={GoogleEvent}
          alt="google headquarters"
        />
        <EventFooter>
          <EventTitle>Google open meetup</EventTitle>
          <LightText>3:10 PM, Today</LightText>
        </EventFooter>
      </Section>
      <Section>
        <FlexSpaceBetween>
          <h6>Friend Requests</h6>
          <StyledLink>All</StyledLink>
        </FlexSpaceBetween>
        <ul>
          <StyledLi>
            <Avatar
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="women"
            />
            <FriendRequestUserInfo>
              <UserName>Jane Clark</UserName>
              <LightText>Google</LightText>
            </FriendRequestUserInfo>
            <StyledDotsIcon />
          </StyledLi>
          <StyledLi>
            <Avatar
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="women"
            />
            <FriendRequestUserInfo>
              <UserName>Jane Clark</UserName>
              <LightText>Google</LightText>
            </FriendRequestUserInfo>
            <StyledDotsIcon />
          </StyledLi>
          <StyledLi>
            <Avatar
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="women"
            />
            <FriendRequestUserInfo>
              <UserName>Jane Clark</UserName>
              <LightText>Google</LightText>
            </FriendRequestUserInfo>
            <StyledDotsIcon />
          </StyledLi>
          <StyledLi>
            <Avatar
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="women"
            />
            <FriendRequestUserInfo>
              <UserName>Jane Clark</UserName>
              <LightText>Google</LightText>
            </FriendRequestUserInfo>
            <StyledDotsIcon />
          </StyledLi>
          <StyledLi>
            <Avatar
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="women"
            />
            <FriendRequestUserInfo>
              <UserName>Jane Clark</UserName>
              <LightText>Google</LightText>
            </FriendRequestUserInfo>
            <StyledDotsIcon />
          </StyledLi>
        </ul>
      </Section>
    </Paper>
  </AsideContainer>
)

const Section = styled.section`
  &:not(:first-of-type) {
    margin-top: 3rem;
  }
`

const AsideContainer = styled.aside`
  max-width: 400px;
  flex: 1;
  margin-left: 2rem;
`

const UserAvatarWrapper = styled.div`
  cursor: pointer;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.colors.bg.secondary};
`

const AddStoryButton = styled(BaseButton)`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: ${props => props.theme.colors.bg.secondary};
  box-shadow: 0 1px 8px rgba(0, 8, 255, 0.6);
`

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  g {
    opacity: 1;
  }
`

const StyledLink = styled.span`
  cursor: pointer;
  color: ${props => props.theme.colors.bg.secondary};
  &:hover {
    text-decoration: underline;
  }
`

const EventFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`

const EventTitle = styled.span`
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const StyledLi = styled.li`
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
  cursor: pointer;
  display: block;
  font-weight: 600;
`

const LightText = styled.span`
  font-size: 13px;
  opacity: 0.5;
`

const StyledDotsIcon = styled(DotsIcon)`
  width: 20px;
  cursor: pointer;
`

export default Aside
