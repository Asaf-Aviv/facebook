import React from 'react'
import styled from 'styled-components'
import PopOverHeader from 'shared/PopOverHeader'
import Typography from 'shared/Typography'

const Music: React.FC = () => (
  <MusicContainer>
    <PopOverHeader>
      <Typography as="h6" color="white" weight={500}>Music</Typography>
      <Typography as="span" color="lightBlue" size="sm" weight={500}>Go to music page</Typography>
    </PopOverHeader>
  </MusicContainer>
)

const MusicContainer = styled.div`
  
`

export default Music
