import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/like.svg'
import { ReactComponent as CommentIcon } from 'assets/icons/comment.svg'
import BaseButton from 'shared/BaseButton'

const ActionsPanel: React.FC = () => (
  <>
    <StyledButton>
      <LikeIcon />
      25K
    </StyledButton>
    <StyledButton>
      <CommentIcon />
      2K
    </StyledButton>
    <StyledButton>
      <ShareIcon />
      542
    </StyledButton>
  </>
)

const StyledButton = styled(BaseButton)`
  margin-right: 1.5rem;
  font-weight: 500;
  & svg {
    margin-right: 0.5rem;
  }
`

export default ActionsPanel
