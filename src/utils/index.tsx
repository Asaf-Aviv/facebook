import React from 'react'

export const trackTimeListened = (duration: number): JSX.Element => {
  const minutes = (duration / 60).toFixed(0)
  const seconds = String(duration % 60)
    .padStart(2, '0')
    .split('')

  return (
    <div style={{ textAlign: 'right' }}>
      <span style={{ paddingRight: 2 }}>{minutes}</span>
      :
      <span style={{ display: 'inline-block', width: 12 }}>{seconds[0]}</span>
      <span style={{ display: 'inline-block', width: 12 }}>{seconds[1]}</span>
    </div>
  )
}

export const calculatePercentageTrackListened = (
  currentDuration: number,
  duration: number,
) => ((currentDuration / duration) * 100).toFixed(0)
