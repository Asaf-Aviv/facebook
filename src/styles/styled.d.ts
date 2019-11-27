import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    shadows: string[]
    fontSize: FontSizes
    colors: {
      bg: BGColors
      text: TextColors
      general: GeneralColors
    }
  }

  type BGColors = Record<BGColor, string>
  type TextColors = Record<TextColor, string>
  type FontSizes = Record<FontSize, string>
  type GeneralColors = Record<GeneralColor, string>

  export type GeneralColor = 'success' | 'error' | 'default'
  export type BGColor = 'primary' | 'secondary' | 'dark'
  export type TextColor = 'primary' | 'secondary' | 'white' | 'lightBlue'
  export type FontSize = 'xs' | 'sm' | 'normal' | 'md' | 'lg' | 'xl' | 'huge'
}
