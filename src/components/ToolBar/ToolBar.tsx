import React, { useState, useRef, useCallback, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg'
import { ReactComponent as MusicIcon } from 'assets/icons/music.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg'
import { ReactComponent as PauseIcon } from 'assets/icons/pause.svg'
import { ReactComponent as PlayIcon } from 'assets/icons/play.svg'
import { ReactComponent as SpeakerIcon } from 'assets/icons/speaker.svg'
import { ReactComponent as NextIcon } from 'assets/icons/next.svg'
import { ReactComponent as PreviousIcon } from 'assets/icons/previous.svg'
import { ToolBarButton, Notifications, Music, ToolBarSearch, Settings } from 'components'
import {
  FlexRow,
  IconButton,
  Typography,
  FlexCol,
  ToolBarPopOver,
  Avatar,
} from 'shared'
import { useOnOutsideClick } from 'hooks'
import {
  trackTimeListened,
  calculatePercentageTrackListened,
} from 'utils/index'
import initialTracks from 'data/tracks'
import { WindowWidthContext } from 'components/Facebook'

const ToolBar: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null)
  const [isVolumeOpen, setIsVolumeOpen] = useState(false)
  const [volumeAmount, setVolumeAmount] = useState('30')
  const [tracks] = useState(initialTracks)
  const [activeTrack, setActiveTrack] = useState({
    id: 0,
    isPlaying: false,
    duration: 191,
    currentDuration: 0,
  })

  const windowWidth = useContext(WindowWidthContext)

  const buttonsWrapperRef = useRef<HTMLDivElement>(null)
  const volumeContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!activeTrack.isPlaying) return

    if (activeTrack.currentDuration === activeTrack.duration) {
      const { id, duration } = tracks[(activeTrack.id + 1) % TrackEvent.length]
      setActiveTrack({
        id,
        duration,
        isPlaying: true,
        currentDuration: 0,
      })
      return
    }

    const id = setTimeout(() => {
      setActiveTrack(prevState => ({
        ...prevState,
        currentDuration: prevState.currentDuration + 1,
      }))
    }, 1000)

    return () => clearTimeout(id)
  }, [
    activeTrack.isPlaying,
    activeTrack.currentDuration,
    activeTrack.duration,
    activeTrack.id,
    tracks,
  ])

  useOnOutsideClick(
    buttonsWrapperRef,
    useCallback(() => {
      if (activeTabIndex !== null) setActiveTabIndex(null)
    }, [activeTabIndex]),
  )

  useOnOutsideClick(
    volumeContainerRef,
    useCallback(() => {
      if (isVolumeOpen) setIsVolumeOpen(false)
    }, [isVolumeOpen]),
  )

  const handleTabClick = (tabIndex: number) => () => {
    const nextActiveTab = tabIndex === activeTabIndex ? null : tabIndex
    setActiveTabIndex(nextActiveTab)
  }

  const ToggleTrackPlayState = () => {
    setActiveTrack(prevState => ({
      ...prevState,
      isPlaying: !prevState.isPlaying,
    }))
  }

  const handleVolumeButtonClick = () => setIsVolumeOpen(prevState => !prevState)

  const isActive = (index: number) => activeTabIndex === index

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolumeAmount(e.target.value)
  }

  return (
    <ToolBarContainer>
      {windowWidth >= 1280 && (
        <StyledFlexRow>
          <Avatar
            src="https://randomuser.me/api/portraits/men/22.jpg"
            alt="Jhon Doe"
          />
          <div style={{ marginLeft: '0.5rem' }}>
            <Typography as="h6" mb="0.25rem" size="normal">
              Jhon Doe
            </Typography>
            <Typography as="span" size="xs" opacity={0.5}>
              That&apos;s me ayyyy
            </Typography>
          </div>
        </StyledFlexRow>
      )}
      <MiddleSection>
        {windowWidth >= 786 && (

          <ButtonsContainer ref={buttonsWrapperRef}>
            <ToolBarButton
              onClick={handleTabClick(0)}
              active={isActive(0)}
              icon={BellIcon}
              badge={7}
            />
            <ToolBarButton
              onClick={handleTabClick(1)}
              active={isActive(1)}
              icon={MusicIcon}
            />
            <ToolBarButton
              onClick={handleTabClick(2)}
              active={isActive(2)}
              icon={SearchIcon}
            />
            <ToolBarButton
              onClick={handleTabClick(3)}
              active={isActive(3)}
              icon={SettingsIcon}
            />
            {activeTabIndex !== null && (
              <ToolBarPopOver activeTab={activeTabIndex}>
                {activeTabIndex === 0 && <Notifications />}
                {activeTabIndex === 1 && (
                  <Music tracks={tracks} activeTrack={activeTrack} />
                )}
                {activeTabIndex === 2 && <ToolBarSearch />}
                {activeTabIndex === 3 && <Settings />}
              </ToolBarPopOver>
            )}
          </ButtonsContainer>
        )}
        <MusicPlayerContainer>
          <IconButton>
            <PreviousIcon />
          </IconButton>
          <IconButton onClick={ToggleTrackPlayState}>
            {activeTrack.isPlaying ? <PauseIcon /> : <PlayIcon />}
          </IconButton>
          <IconButton>
            <NextIcon />
          </IconButton>
          <CurrentTrackContainer
            duration={calculatePercentageTrackListened(
              activeTrack.currentDuration,
              activeTrack.duration,
            )}
          >
            <TrackWrapper>
              <div>
                <Typography as="h6" color="white" mb="0.25rem" size="sm">
                  Nick And The Niners
                </Typography>
                <Typography
                  as="span"
                  display="block"
                  size="xs"
                  opacity={0.5}
                >
                  Twenty One Pilots
                </Typography>
              </div>
              <Typography>
                {trackTimeListened(activeTrack.currentDuration)}
              </Typography>
            </TrackWrapper>
            <StyledSlider
              type="range"
              min={0}
              max={100}
              // onChange={handleVolumeChange}
            />
          </CurrentTrackContainer>
          <VolumeContainer ref={volumeContainerRef}>
            <ToolBarButton
              onClick={handleVolumeButtonClick}
              active={isVolumeOpen}
              icon={SpeakerIcon}
            />
            {isVolumeOpen && (
              <VolumeSliderContainer volume={volumeAmount}>
                <Input
                  type="range"
                  min={0}
                  max={100}
                  onChange={handleVolumeChange}
                />
              </VolumeSliderContainer>
            )}
          </VolumeContainer>
        </MusicPlayerContainer>
      </MiddleSection>
    </ToolBarContainer>
  )
}

const MusicPlayerContainer = styled(FlexRow)`
  height: 100%;
`

const TrackWrapper = styled(FlexRow)`
  color: #FFF;
  justify-content: space-between;
`

const MiddleSection = styled(FlexRow)`
  flex: 1;
  display: flex;
  justify-content: space-between;
  /* act as space-evenly for unsupported browsers  */
  &:before,
  &:after {
    content: '';
    display: block;
  }
`

const StyledFlexRow = styled(FlexRow)`
  padding: 0 1rem;
  color: #FFF;
`

const Input = styled.input`
  cursor: pointer;
  background: transparent;
  display: block;
  height: 25px;
  width: 100px;
  bottom: 35px;
  position: absolute;
  transform: rotate(-90deg);
  -webkit-appearance: none !important;
  &[type="range"] {
    ::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      width: 300px;
      height: 5px;
      border: none;
      border-radius: 3px;
      background: transparent;
    }
    ::-moz-range-track {
      -webkit-appearance: none;
      width: 300px;
      height: 5px;
      border: none;
      border-radius: 3px;
      background: transparent;
    }
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      height: 13px;
      width: 13px;
      border-radius: 50%;
      margin-top: -4px;
      background: transparent;
    }
    ::-moz-range-thumb {
      -webkit-appearance: none;
      border: none;
      height: 13px;
      width: 13px;
      border-radius: 50%;
      margin-top: -4px;
      background: transparent;
    }
    &:focus {
      outline: none;
    }
  }
`

const StyledSlider = styled(Input)`
  position: static;
  transform: rotate(0);
  height: 10px;
  width: 100%;
  background: transparent;
`

const VolumeSliderContainer = styled.div<{ volume: string }>`
  position: absolute;
  height: 120px;
  width: 50px;
  top: -120px;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.bg.dark};
  display: flex;
  align-items: flex-end;
  z-index: -2;
  &::before,
  &::after {
    cursor: pointer;
    content: '';
    position: absolute;
    height: 100px;
    width: 5px;
    z-index: -1;
  }
  &::before {
    background: rgba(255, 255, 255, 0.3);
  }
  &::after {
    height: ${props => props.volume}px;
    background: #fff;
  }
  @media screen and (min-width: 1200px) {
    width: 70px;
  }
`

const VolumeContainer = styled.div`
  position: relative;
  height: 100%;
  width: 50px;
  @media screen and (min-width: 1200px) {
    width: 70px;
  }
`

const CurrentTrackContainer = styled(FlexCol)<{ duration: string }>`
  position: relative;
  width: 300px;
  height: 100%;
  justify-content: center;
  margin: 0 1rem;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 4px;
    bottom: 5px;
    z-index: 5;
  }
  &::before {
    background: rgba(255, 255, 255, 0.3);
    width: 100%;
  }
  &::after {
    width: ${props => props.duration}%;
    background: #fff;
  }
  @media screen and (min-width: 1200px) {
    &::before,
    &::after {
      bottom: 10px;
    }
  }
`

const ButtonsContainer = styled.div`
  display: inline-flex;
  height: 100%;
`

const ToolBarContainer = styled.div`
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: rgb(60, 90, 153);
  background: rgba(60, 90, 153, 0.95);
  @media screen and (min-width: 1200px) {
    height: 70px;
  }
`

export default ToolBar
