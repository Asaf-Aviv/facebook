import React, { useState, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { PopOverHeader, Typography, FlexRow } from 'shared'
import { Toggler } from 'components'

const Settings: React.FC = () => {
  const [friendRequests, setFriendRequests] = useState(true)
  const [likes, setLikes] = useState(false)
  const [comments, setComments] = useState(false)
  const [messages, setMessages] = useState(true)

  const handleToggleChange = (stateUpdater: Dispatch<SetStateAction<boolean>>) => () => {
    stateUpdater(prevState => !prevState)
  }

  return (
    <ToolBarSearchContainer>
      <PopOverHeader>
        <Typography as="h6" color="white" mb="0.25rem" weight={500}>Settings</Typography>
      </PopOverHeader>
      <Div>
        <Option>
          <Typography as="span" weight={500}>Friend Requests</Typography>
          <Toggler
            checked={friendRequests}
            onChange={handleToggleChange(setFriendRequests)}
          />
        </Option>
        <Option>
          <Typography as="span" weight={500}>Likes</Typography>
          <Toggler
            checked={likes}
            onChange={handleToggleChange(setLikes)}
          />
        </Option>
        <Option>
          <Typography as="span" weight={500}>Comments</Typography>
          <Toggler
            checked={comments}
            onChange={handleToggleChange(setComments)}
          />
        </Option>
        <Option>
          <Typography as="span" weight={500}>Messages</Typography>
          <Toggler
            checked={messages}
            onChange={handleToggleChange(setMessages)}
          />
        </Option>
      </Div>
    </ToolBarSearchContainer>
  )
}

const Div = styled.div`
  color: white;
`

const ToolBarSearchContainer = styled.div`
  width: 300px;
`

const Option = styled(FlexRow)`
  padding: 1rem;
  justify-content: space-between;
`

export default Settings
