import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/router/router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './modules/styles/global-styles'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ThemeProvider theme={{}}>
    <Fragment>
      <GlobalStyles />
      <Routes />
    </Fragment>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
