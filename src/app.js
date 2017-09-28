import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { firebase } from './firebase/firebase'

import AppRouter, { history } from './router/AppRoutes'
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>
    , document.querySelector('#app'));
}

render(AppRouter)

if (module.hot) {
    module.hot.accept()
}

const publicPages = ['/']

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    history.push('/dashboard')
  } else {
    history.push('/')
  }
})

