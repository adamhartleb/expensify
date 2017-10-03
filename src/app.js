import React from 'react'
import ReactDOM from 'react-dom'

import './styles/styles.scss'
import 'normalize.css/normalize.scss'

import AppRouter, { history } from './router/AppRoutes'
import { AppContainer } from 'react-hot-loader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider>
        <Component />
      </MuiThemeProvider>
    </AppContainer>
    , document.querySelector('#app'));
}

render(AppRouter)

if (module.hot) {
    module.hot.accept()
}



