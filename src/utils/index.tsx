import React from 'react'
import styled from 'styled-components'

export const trackTimeListened = (duration: number): JSX.Element => {
  const minutes = (duration / 60).toFixed(0)
  const seconds = String(duration % 60)
    .padStart(2, '0')
    .split('')

  return (
    <>
      <span>{minutes}</span>
      :
      <StyledSpan>{seconds[0]}</StyledSpan>
      <StyledSpan>{seconds[1]}</StyledSpan>
    </>
  )
}

const StyledSpan = styled.span`
  display: inline-block;
  width: 12px;
`

export const calculatePercentageTrackListened = (
  currentDuration: number,
  duration: number,
) => ((currentDuration / duration) * 100).toFixed(0)
