import React, { useState } from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'
import { Avatar, Paper } from 'shared'

const CreatePost: React.FC = () => {
  const [postBody, setPostBody] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostBody(e.target.value)
  }

  return (
    <StyledPaper>
      <Avatar
        src="https://randomuser.me/api/portraits/men/22.jpg"
        alt="Jhon Doe"
      />
      <Input
        placeholder="What's on your mind?"
        value={postBody}
        onChange={handleChange}
      />
    </StyledPaper>
  )
}

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: flex-start;
  min-height: 80px;
  margin-bottom: 2rem;
`

const Input = styled(TextareaAutosize)`
  flex: 1;
  margin-left: 1rem;
  border: none;
  outline: none;
  padding: 1rem 1rem 1rem 0;
  line-height: 1.5;
  min-height: 50px;
  align-self: center;
  resize: none;
  &::placeholder {
    opacity: 0.5;
  }
`

export default CreatePost
