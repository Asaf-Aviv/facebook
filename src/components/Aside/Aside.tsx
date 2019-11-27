import React from 'react'
import styled from 'styled-components'
import { BaseButton, Paper } from 'shared'
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg'
import GoogleEvent from 'assets/images/google-event.jpg'
import { FakeLink, StoryLink, FriendRequest } from 'components'

const Aside: React.FC<{ className?: string }> = ({ className }) => (
  <AsideContainer className={className}>
    <Paper>
      <Section>
        <h6>Stories</h6>
        <FlexSpaceBetween>
          <AddStoryButton>
            <PlusIcon />
          </AddStoryButton>
          <StoryLink />
          <StoryLink />
          <StoryLink />
        </FlexSpaceBetween>
      </Section>
      <Section>
        <FlexSpaceBetween>
          <h6>Upcoming Events</h6>
          <FakeLink>
            <AllLink>All</AllLink>
          </FakeLink>
        </FlexSpaceBetween>
        <Img
          src={GoogleEvent}
          alt="google headquarters"
        />
        <EventFooter>
          <FakeLink>
            <EventTitle>Google open meetup</EventTitle>
          </FakeLink>
          <LightText>3:10 PM, Today</LightText>
        </EventFooter>
      </Section>
      <Section>
        <FlexSpaceBetween>
          <h6>Friend Requests</h6>
          <FakeLink>
            <AllLink>All</AllLink>
          </FakeLink>
        </FlexSpaceBetween>
        <ul>
          <FriendRequest />
          <FriendRequest />
          <FriendRequest />
          <FriendRequest />
          <FriendRequest />
          <FriendRequest />
        </ul>
      </Section>
    </Paper>
  </AsideContainer>
)

const Img = styled.img`
  max-width: 100%;
`

const Section = styled.section`
  &:not(:first-of-type) {
    margin-top: 3rem;
  }
`

const AsideContainer = styled.aside`
  flex: 1;
  margin-left: 1rem;
  min-width: 300px;
  max-width: 400px;
  @media screen and (min-width: 900px) {
    margin-left: 2rem;
  }
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

const AllLink = styled.span`
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

const LightText = styled.span`
  font-size: 13px;
  opacity: 0.5;
`

export default Aside
