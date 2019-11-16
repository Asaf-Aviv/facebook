import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #454545;
    background: #F6F6F9;
  }

  ul {
    list-style: none;
  }

  h6 {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  img {
    user-select: none;
  }

  button {
    cursor: pointer;
  }

  .App {
    display: flex;
    align-items: flex-start;
  }
`

export default GlobalStyle
