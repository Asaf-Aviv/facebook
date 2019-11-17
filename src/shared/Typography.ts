import styled, { TextColor, FontSize, css } from 'styled-components'

interface Typography {
  display?: string
  color?: TextColor
  weight?: number
  size?: FontSize
  opacity?: number
  m?: string
  mb?: string
  mt?: string
  ml?: string
  mr?: string
  mx?: string
  my?: string
}

const Typography = styled.p<Typography>`
  ${(props) => {
    const {
      theme: { colors: { text }, fontSize },
      display,
      color,
      weight,
      size,
      opacity,
      m,
      mb,
      mt,
      ml,
      mr,
      mx,
      my,
    } = props

    return css`
      ${display && `display: ${display};`}
      ${color && `color: ${text[color]};`}
      ${weight && `font-weight: ${weight};`}
      ${size && `font-size: ${fontSize[size]};`}
      ${opacity && `opacity: ${opacity};`}
      ${m && `margin: ${m};`}
      ${mt && `margin-top: ${mt};`}
      ${mb && `margin-bottom: ${mb};`}
      ${ml && `margin-left: ${ml};`}
      ${mr && `margin-right: ${mr};`}
      ${mx && `
        margin-left: ${mx};
        margin-right: ${mx};
      `}
      ${my && `
        margin-top: ${my};
        margin-bottom: ${my};
      `}
    `
  }};
`

export default Typography
