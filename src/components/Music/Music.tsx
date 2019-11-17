import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Typography, BaseButton, PopOverHeader, FlexCol } from 'shared'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import SongImage from 'assets/images/nico.png'
import SimpleBar from 'simplebar-react'
import { Track } from 'components'
import lyrics from './lyrics'

const MusicSearchInput: React.FC = () => {
  const [value, setValue] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <MusicSearchInputContainer>
      <StyledSearchIcon />
      <Input
        value={value}
        onChange={handleOnChange}
        placeholder="Search for song, artist or an album"
      />
    </MusicSearchInputContainer>
  )
}

const MusicSearchInputContainer = styled.div`
  position: relative;
  display: flex;
  margin: 1.5rem 0 0.5rem;
  align-items: center;
`

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 0.75rem;
  height: 1.25rem;
`

const Input = styled.input`
  flex: 1;
  background: transparent;
  color: #fff;
  padding-left: 2.75rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  height: 3rem;
  outline: none;
  &::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`

const Music: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [activeTrack, setActiveTrack] = useState<number | null>(0)

  const isActive = (index: number) => index === activeTrack

  const onTabClick = (tabIndex: number) => () => setActiveTabIndex(tabIndex)

  const isTabActive = (tabIndex: number) => tabIndex === activeTabIndex

  return (
    <MusicContainer>
      <PopOverHeader>
        <Typography as="h6" color="white" weight={500}>
          Music
        </Typography>
        <Typography as="span" color="lightBlue" size="sm" weight={500}>
          Go to music page
        </Typography>
      </PopOverHeader>
      <Container>
        <LeftSection>
          <NavAndSearchContainer>
            <MusicPanelNav>
              <MusicPanelButton onClick={onTabClick(0)} active={isTabActive(0)}>
                Daily playlist
              </MusicPanelButton>
              <MusicPanelButton onClick={onTabClick(1)} active={isTabActive(1)}>
                My music
              </MusicPanelButton>
              <MusicPanelButton onClick={onTabClick(2)} active={isTabActive(2)}>
                Radio
              </MusicPanelButton>
              <MusicPanelButton onClick={onTabClick(3)} active={isTabActive(3)}>
                Radio
              </MusicPanelButton>
              <MusicPanelButton onClick={onTabClick(4)} active={isTabActive(4)}>
                Playlists
              </MusicPanelButton>
              <MusicPanelButton onClick={onTabClick(5)} active={isTabActive(5)}>
                Friends
              </MusicPanelButton>
            </MusicPanelNav>
            <MusicSearchInput />
          </NavAndSearchContainer>
          <SimpleBar style={{ maxHeight: 405 }}>
            <TracksList>
              <Track isSelected={isActive(0)} isPlaying />
              <Track isSelected={isActive(1)} isPlaying={false} />
              <Track isSelected={isActive(2)} isPlaying={false} />
              <Track isSelected={isActive(3)} isPlaying={false} />
              <Track isSelected={isActive(4)} isPlaying={false} />
              <Track isSelected={isActive(5)} isPlaying={false} />
              <Track isSelected={isActive(6)} isPlaying={false} />
              <Track isSelected={isActive(7)} isPlaying={false} />
            </TracksList>
          </SimpleBar>
        </LeftSection>
        <FlexCol>
          <img src={SongImage} alt="nico and the niners" />
          <Typography as="h6" color="white" mt="1.25rem" mb="0.5rem">
            Nick And The Niners
          </Typography>
          <SimpleBar style={{ maxHeight: 405 }}>
            <Lyrics>{lyrics}</Lyrics>
          </SimpleBar>
        </FlexCol>
      </Container>
    </MusicContainer>
  )
}

const Lyrics = styled.p`
  margin-top: -1rem;
  margin-right: 1rem;
  white-space: pre-line;
  color: #fff;
  font-size: ${props => props.theme.fontSize.sm};
  line-height: 1.3;
`

const TracksList = styled(FlexCol).attrs({ as: 'ul' })`
  flex: 1;
  margin-right: 1rem;
`

const Container = styled.div`
  display: flex;
  flex: 1;
`

const LeftSection = styled(FlexCol)`
  margin-right: 0.5rem;
`

const NavAndSearchContainer = styled.div`
  padding: 1rem;
`

const MusicContainer = styled.div`
  width: 920px;
  height: 600px;
  display: flex;
  flex-direction: column;
`

const MusicPanelButton = styled(BaseButton)<{ active: boolean }>`
  ${(props) => {
    const { active, theme } = props
    const { sm } = theme.fontSize

    return css`
      background: ${active ? '#FFF' : 'transparent'};
      color: ${active ? 'inherit' : '#FFF'};
      border-radius: 25px;
      padding: 0.45rem 1rem;
      font-size: ${sm};
      transition: 150ms ease-out;
      &:not(:first-of-type) {
        margin-left: 0.5rem;
      }
      &:hover {
        background: #fff;
        color: inherit;
      }
    `
  }};
`

const MusicPanelNav = styled.nav`
  display: flex;
`

export default Music
