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
    general: {
      success: '#018601',
      error: '#d60000',
      default: '#cecece',
    },
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    normal: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.375rem',
    huge: '1.5rem',
  },
  shadows: [
    '0 1px 0px 1px rgba(208, 208, 208, 0.4)',
    '0 3px 1px rgba(211, 216, 224, 0.4)',
  ],
}

export default theme
