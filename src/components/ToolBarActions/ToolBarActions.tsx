import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg'
import { ReactComponent as MusicIcon } from 'assets/icons/music.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg'
import ToolBarPopOver from 'shared/ToolBarPopOver'
import ToolBarButton from 'components/ToolBarButton'
import Notifications from 'components/Notifications'
import Music from 'components/Music'

const activeComponents = [
  Notifications,
  Music,
  Notifications,
  Notifications,
]

const getActiveComponent = (index: number | null) => index !== null && activeComponents[index]

const ToolBarActions: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null)
  const buttonsWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const node = buttonsWrapperRef.current

      if (node?.contains(e.target as Node)) return

      if (activeTabIndex !== null) {
        setActiveTabIndex(null)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [activeTabIndex])


  const handleTabClick = (tabIndex: number) => () => {
    const nextActiveTab = tabIndex === activeTabIndex ? null : tabIndex
    setActiveTabIndex(nextActiveTab)
  }

  const isActive = (index: number) => activeTabIndex === index

  const ActiveComponent = getActiveComponent(activeTabIndex) as React.FC

  return (
    <ButtonsContainer ref={buttonsWrapperRef}>
      <ToolBarButton onClick={handleTabClick(0)} active={isActive(0)} icon={BellIcon} badge={7} />
      <ToolBarButton onClick={handleTabClick(1)} active={isActive(1)} icon={MusicIcon} />
      <ToolBarButton onClick={handleTabClick(2)} active={isActive(2)} icon={SearchIcon} />
      <ToolBarButton onClick={handleTabClick(3)} active={isActive(2)} icon={SettingsIcon} />

      {activeTabIndex !== null && (
        <ToolBarPopOver activeTab={activeTabIndex}>
          <ActiveComponent />
        </ToolBarPopOver>
      )}
    </ButtonsContainer>
  )
}

const ButtonsContainer = styled.div`
  display: inline-flex;
  height: 100%;
`

export default ToolBarActions
