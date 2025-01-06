import { createGlobalStyle } from 'styled-components'
import color from '../../design-system/colors/color'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  body {
    background-color: ${color.gray100};
    color: ${color.white};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`
