import lyrics from './lyrics'

const track = {
  id: 0,
  name: 'Nick And The Niners',
  artist: 'Twenty One Pilots',
  lyrics,
  duration: 191,
}

export type Track = typeof track

const tracks: Track[] = [...Array(8)].map((_, index) => ({
  ...track,
  id: index,
}))

export default tracks
