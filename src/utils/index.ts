/* eslint-disable import/prefer-default-export */
export const trackTimeListened = (duraction: number) => {
  const minutes = (duraction / 60).toFixed(0)
  const seconds = String((duraction % 60)).padStart(2, '0')

  return [minutes, seconds].join(':')
}
