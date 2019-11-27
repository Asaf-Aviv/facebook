import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Typography, BaseButton, PopOverHeader, FlexCol } from 'shared'
import SongImage from 'assets/images/nico.png'
import SimpleBar from 'simplebar-react'
import { Track, SearchInput, FakeLink } from 'components'
import { Track as ITrack } from 'data/tracks'

interface ActiveTrack {
  id: number
  isPlaying: boolean
  duration: number
  currentDuration: number
}

interface Music {
  activeTrack: ActiveTrack
  tracks: ITrack[]
}

const musicTabs = ['Daily playlist', 'My music', 'Radio', 'Playlists', 'Friends']

const Music: React.FC<Music> = ({ tracks, activeTrack }) => {
  const [activeTabName, setActiveTabName] = useState(musicTabs[0])

  const onTabClick = (tabName: string) => () => setActiveTabName(tabName)
  const isTabActive = (tabName: string) => tabName === activeTabName

  const renderMusicTab = (tabName: string) => (
    <MusicPanelButton
      key={tabName}
      onClick={onTabClick(tabName)}
      active={isTabActive(tabName)}
    >
      {tabName}
    </MusicPanelButton>
  )

  const renderTrack = ({ id }: ITrack) => (
    <Track
      key={id}
      isSelected={activeTrack.id === id}
      isPlaying={activeTrack.id === id && activeTrack.isPlaying}
    />
  )

  return (
    <MusicContainer>
      <PopOverHeader>
        <Typography as="h6" color="white" weight={500}>
          Music
        </Typography>
        <FakeLink>
          <Typography as="span" color="lightBlue" size="sm" weight={500}>
            Go to music page
          </Typography>
        </FakeLink>
      </PopOverHeader>
      <Container>
        <LeftSection>
          <NavAndSearchContainer>
            <MusicPanelNav>
              {musicTabs.map(renderMusicTab)}
            </MusicPanelNav>
            <SearchInputContainer>
              <SearchInput />
            </SearchInputContainer>
          </NavAndSearchContainer>
          <SimpleBar style={{ maxHeight: 405 }}>
            <TracksList>
              {tracks.map(renderTrack)}
            </TracksList>
          </SimpleBar>
        </LeftSection>
        <FlexCol>
          <img style={{ maxWidth: '100%' }} src={SongImage} alt="nico and the niners" />
          <Typography as="h6" color="white" mt="1.25rem" mb="0.5rem">
            Nick And The Niners
          </Typography>
          <SimpleBar style={{ maxHeight: 405 }}>
            <Lyrics>{tracks[activeTrack.id].lyrics}</Lyrics>
          </SimpleBar>
        </FlexCol>
      </Container>
    </MusicContainer>
  )
}

const SearchInputContainer = styled.div`
  margin: 1.5rem 0 0.5rem;
`

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
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    width: 920px;
  }
`

const MusicPanelButton = styled(BaseButton)<{ active: boolean }>`
  ${(props) => {
    const { active, theme } = props
    const { sm } = theme.fontSize

    return css`
      background: ${active ? '#FFF' : 'transparent'};
      color: ${active ? 'inherit' : '#FFF'};
      border-radius: 25px;
      padding: 0.25rem 0.5rem;
      font-size: ${sm};
      transition: 150ms ease-out;
      font-size: 14px;
      &:not(:first-of-type) {
        margin-left: 0.5rem;
      }
      &:hover {
        background: #fff;
        color: inherit;
      }
      @media screen (min-width: 1200px) {
        padding: 0.45rem 1rem;
      }
    `
  }};
`

const MusicPanelNav = styled.nav`
  display: flex;
`

export default Music
