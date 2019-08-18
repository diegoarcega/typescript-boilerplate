import React, { Fragment } from 'react'
import Routes from '../router/router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../modules/styles/global-styles'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={{}}>
      <Fragment>
        <GlobalStyles />
        <Routes />
      </Fragment>
    </ThemeProvider>
  )
}

export default App
