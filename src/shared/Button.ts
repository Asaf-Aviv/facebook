import styled, { css, GeneralColor } from 'styled-components'
import { BaseButton } from 'shared'

interface Button {
  variant?: GeneralColor
}

const Button = styled(BaseButton)<Button>`
  ${(props) => {
    const { variant = 'default', theme } = props
    const { borderRadius, colors, fontSize } = theme
    const bGcolor = colors.general[variant]

    return css`
      padding: 0.5rem;
      border-radius: ${borderRadius};
      background: ${bGcolor};
      font-weight: 600;
      font-size: ${fontSize.sm};
      ${variant !== 'default' && `
        color: #FFF;
      `}
    `
  }};
`

export default Button
