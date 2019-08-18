import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root { height: 100%; }

  body {
    color: #fff;
    font-weight: 100;
    background-attachment: fixed;
    background: linear-gradient(to left top, #0A090E 10%, #24244c 100%);
    font-family: "Segoe UI", "Quicksand", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;

    &:visited {
      color: #fff
    }
  }
`
