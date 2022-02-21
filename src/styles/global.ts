import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    ${({ theme: { colors, fonts } }) => css`
      background-color: ${colors.background900};
      font-family: ${fonts.text};
      overflow: unset;
    `}
  }
`
