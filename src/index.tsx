import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './modules/styles/global-styles'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ThemeProvider theme={{}}>
    <Fragment>
      <GlobalStyles />
      <App />
    </Fragment>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
