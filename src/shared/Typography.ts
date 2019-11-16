import styled, { TextColor, FontSize, css } from 'styled-components'

interface Typography {
  color?: TextColor
  weight?: number
  size?: FontSize
  opacity?: number
}

const Typography = styled.p<Typography>`
  ${(props) => {
    const {
      theme,
      color = 'primary',
      weight = 400,
      size = 'normal',
      opacity = 1,
    } = props

    return css`
      color: ${theme.colors.text[color]};
      font-weight: ${weight};
      font-size: ${theme.fontSize[size]};
      opacity: ${opacity};
    `
  }};
`

export default Typography
