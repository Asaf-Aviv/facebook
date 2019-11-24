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
    <Typography size="lg" color="white" mx="1rem" opacity={0.5}>3:11</Typography>
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
  height: auto;
  width: auto;
  &:hover {
    background: initial;
  }
  @media screen and (max-width: 1279px) {
    height: 50px;
    width: 50px;
  }
`

const TrackInfo = styled.div`
  margin-left: 1rem;
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
      padding: 1rem;

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
