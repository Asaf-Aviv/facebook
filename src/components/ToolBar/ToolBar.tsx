import React, { useState, useRef, useCallback, useEffect } from 'react'
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
import { ToolBarButton, Notifications, Music } from 'components'
import {
  FlexRow,
  IconButton,
  Typography,
  FlexCol,
  ToolBarPopOver,
  Avatar,
} from 'shared'
import useOnOutsideClick from 'hooks/useOnOutsideClick'
import { trackTimeListened } from 'utils'

const ToolBar: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null)
  const [isVolumeOpen, setIsVolumeOpen] = useState(false)
  const [volumeAmount, setVolumeAmount] = useState('50')
  const [activeTrack, setActiveTrack] = useState({
    id: 2,
    isPlaying: false,
    duration: 191,
    currentDuration: 0,
  })

  const buttonsWrapperRef = useRef<HTMLDivElement>(null)
  const volumeContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!activeTrack.isPlaying) return

    setTimeout(() => {
      // TODO:  switch to next track when track is ended
      setActiveTrack(prevState => ({
        ...prevState,
        currentDuration: prevState.currentDuration + 1,
      }))
    }, 1000)
  }, [activeTrack.isPlaying, activeTrack.currentDuration])

  useOnOutsideClick(buttonsWrapperRef, useCallback(() => {
    if (activeTabIndex !== null) setActiveTabIndex(null)
  }, [activeTabIndex]))

  useOnOutsideClick(volumeContainerRef, useCallback(() => {
    if (isVolumeOpen) setIsVolumeOpen(false)
  }, [isVolumeOpen]))

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
      <FlexRow style={{ padding: '0 1rem', color: 'white' }}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/22.jpg"
          alt="Jhon Doe"
        />
        <div style={{ marginLeft: '0.5rem' }}>
          <Typography as="h6" mb="0.25rem" size="normal">Jhon Doe</Typography>
          <Typography as="span" size="xs" opacity={0.5}>That&apos;s me ayyyy</Typography>
        </div>
      </FlexRow>
      <FlexRow style={{ justifyContent: 'space-evenly', flex: 1 }}>
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
            {activeTabIndex === 1 && <Music />}
          </ToolBarPopOver>
          )}
        </ButtonsContainer>
        <FlexRow>
          <IconButton>
            <PreviousIcon />
          </IconButton>
          <IconButton onClick={ToggleTrackPlayState}>
            {activeTrack.isPlaying ? <PauseIcon /> : <PlayIcon />}
          </IconButton>
          <IconButton>
            <NextIcon />
          </IconButton>
          <CurrentTrackContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
              <div>
                <Typography as="h6" color="white" mb="0.25rem" size="sm">
                Nick And The Niners
                </Typography>
                <Typography
                  as="span"
                  display="block"
                  size="xs"
                  mb="0.5rem"
                  opacity={0.5}
                >
                Twenty One Pilots
                </Typography>
              </div>
              <Typography>
                {trackTimeListened(activeTrack.currentDuration)}
              </Typography>
            </div>
            <TrackTimeLine />
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
        </FlexRow>
      </FlexRow>
    </ToolBarContainer>
  )
}

const Input = styled.input`
  position: absolute;
  cursor: pointer;
  background: transparent;
  display: block;
  height: 30px;
  width: 100px;
  bottom: 35px;
  -webkit-appearance: none;
  transform: rotate(-90deg);
  ::-webkit-slider-runnable-track {
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
  }
  &:focus {
    outline: none;
  }
`

const VolumeSliderContainer = styled.div<{ volume: string }>`
  position: absolute;
  height: 120px;
  width: 70px;
  top: -120px;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.bg.dark};;
  display: flex;
  align-items: flex-end;
  z-index: -2;
  &::before, &::after {
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
    background: #FFF;
  }
`

const VolumeContainer = styled.div`
  position: relative;
  height: 70px;
  width: 70px;
`

const CurrentTrackContainer = styled(FlexCol)`
  width: 300px;
  height: 100%;
  justify-content: center;
  margin: 0 1rem;
`

const TrackTimeLine = styled.div`
  cursor: pointer;
  position: relative;
  height: 5px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    width: 16%;
    height: 4px;
    background: #fff;
  }
`

const ButtonsContainer = styled.div`
  display: inline-flex;
  height: 100%;
`

const ToolBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  background: #3c5a99f2;
`

export default ToolBar
