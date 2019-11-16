import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  borderRadius: '6px',
  colors: {
    bg: {
      primary: '#4E69A3',
      secondary: '#5085E8',
      dark: '#2D4373',
    },
    text: {
      primary: '#454545',
      secondary: 'magenta',
      white: '#FFF',
      lightBlue: '#A9C7FD',
    },
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    normal: '1rem',
    md: '1.125rem',
    big: '1.25rem',
    bigger: '1.375',
    huge: '1.5rem',
  },
  shadows: [
    '0 3px 1px rgba(211, 216, 224, 0.4)',
  ],
}

export default theme
