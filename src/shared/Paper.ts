import styled, { css } from 'styled-components'

const Paper = styled.div`
  ${(props) => {
    const { shadows, borderRadius } = props.theme

    return css`
      padding: 1rem;
      background: #FFF;
      box-shadow: ${shadows[0]};
      border-radius: ${borderRadius};
    `
  }}
`

export default Paper
