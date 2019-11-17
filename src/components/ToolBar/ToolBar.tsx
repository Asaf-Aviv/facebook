import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg'
import { ReactComponent as MusicIcon } from 'assets/icons/music.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg'
import { ReactComponent as PauseIcon } from 'assets/icons/pause.svg'
import { ReactComponent as SpeakerIcon } from 'assets/icons/speaker.svg'
import { ReactComponent as NextIcon } from 'assets/icons/next.svg'
import { ReactComponent as PreviousIcon } from 'assets/icons/previous.svg'
import { ToolBarButton, Notifications, Music } from 'components'
import { FlexRow, IconButton, Typography, FlexCol, ToolBarPopOver } from 'shared'

const ToolBar: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null)
  const [isVolumeOpen, setIsVolumeOpen] = useState(false)
  const [volumeAmount, setVolumeAmount] = useState(75)
  const buttonsWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeTabIndex === null) return

    const handleOutsideClick = (e: MouseEvent) => {
      const node = buttonsWrapperRef.current

      if (node?.contains(e.target as Node)) return

      setActiveTabIndex(null)
    }

    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [activeTabIndex])

  const handleTabClick = (tabIndex: number) => () => {
    const nextActiveTab = tabIndex === activeTabIndex ? null : tabIndex
    setActiveTabIndex(nextActiveTab)
  }

  const handleVolumeClick = () => setIsVolumeOpen(prevState => !prevState)

  const isActive = (index: number) => activeTabIndex === index

  return (
    <ToolBarContainer>
      <ButtonsContainer ref={buttonsWrapperRef}>
        <ToolBarButton onClick={handleTabClick(0)} active={isActive(0)} icon={BellIcon} badge={7} />
        <ToolBarButton onClick={handleTabClick(1)} active={isActive(1)} icon={MusicIcon} />
        <ToolBarButton onClick={handleTabClick(2)} active={isActive(2)} icon={SearchIcon} />
        <ToolBarButton onClick={handleTabClick(3)} active={isActive(3)} icon={SettingsIcon} />

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
        <IconButton>
          <PauseIcon />
        </IconButton>
        <IconButton>
          <NextIcon />
        </IconButton>
        <CurrentTrackContainer>
          <Typography as="h6" color="white" mb="0.25rem" size="sm">Nick And The Niners</Typography>
          <Typography as="span" display="block" size="xs" mb="0.5rem" color="white" opacity={0.5}>Twenty One Pilots</Typography>
          <TrackTimeLine />
        </CurrentTrackContainer>
        <VolumeContainer>
          <ToolBarButton onClick={handleVolumeClick} active={isVolumeOpen} icon={SpeakerIcon} />
          {isVolumeOpen && <VolumeSlider volume={volumeAmount} />}
        </VolumeContainer>
      </FlexRow>
    </ToolBarContainer>
  )
}

const VolumeSlider = styled.div<{ volume: number }>`
  position: absolute;
  height: 120px;
  width: 70px;
  top: -120px;
  background: ${props => props.theme.colors.bg.dark};;
  display: flex;
  align-items: flex-end;
  &::before, &::after {
    cursor: pointer;
    content: '';
    position: absolute;
    height: 100px;
    width: 5px;
    left: 32.5px;
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
    background: #FFF;
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
