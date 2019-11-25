import React from 'react'
import styled, { css } from 'styled-components'
import { Typography, FlexRow, IconButton } from 'shared'
import { ReactComponent as PlayIcon } from 'assets/icons/play.svg'
import { ReactComponent as PauseIcon } from 'assets/icons/pause.svg'
import { ReactComponent as AddIcon } from 'assets/icons/plus.svg'
import TrackImage from 'assets/images/nico-and-the-niners.png'

interface Track {
  isPlaying: boolean
  isSelected: boolean
}

const Track: React.FC<Track> = ({ isPlaying, isSelected }) => (
  <TrackContainer isSelected={isSelected}>
    <img src={TrackImage} alt="nico and the niners" />
    <TrackInfo>
      <TrackTitle as="h6" color="white" mb="0.5rem">Nick And The Niners</TrackTitle>
      <Typography as="span" size="xs" color="white" opacity={0.5}>Twenty One Pilots</Typography>
    </TrackInfo>
    <Typography color="white" opacity={0.5}>3:11</Typography>
    <FlexRow>
      <TrackButton>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </TrackButton>
      <TrackButton>
        <AddIcon />
      </TrackButton>
    </FlexRow>
  </TrackContainer>
)

const TrackTitle = styled(Typography)`
  @media screen and (max-width: 1279px) {
    font-size: 16px;
  }
`

const TrackButton = styled(IconButton)`
  height: 50px !important;
  width: 50px !important;
`

const TrackInfo = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`

const TrackContainer = styled.li<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => {
    const { borderRadius } = theme

    return css`
      display: flex;
      align-items: center;
      border-top-right-radius: ${borderRadius};
      border-bottom-right-radius: ${borderRadius};
      padding: 1rem 0.5rem 1rem 1rem;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }

      ${isSelected && `
        background: rgba(0, 0, 0, 0.1);
      `}
    `
  }}
`

export default Track
