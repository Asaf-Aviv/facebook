import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    shadows: string[]

    colors: {
      bg: {
        primary: string
        secondary: string
      }
      text: {
        primary: string
        secondary: string
      }
    }
  }
}
