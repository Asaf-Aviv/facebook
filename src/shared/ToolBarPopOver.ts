import styled, { css } from 'styled-components'

const ToolBarPopOver = styled.div<{ activeTab: number }>`
  ${(props) => {
    const { activeTab, theme } = props
    const { borderRadius, colors } = theme
    const translateX = activeTab * 70

    return css`
      position: absolute;
      left: 0;
      background: ${colors.bg.dark};
      border-top-left-radius: ${borderRadius};
      border-top-right-radius: ${borderRadius};
      transform: translateX(${translateX}px) translateY(-100%);
      transition: transform 250ms;
    `
  }};
`

export default ToolBarPopOver
