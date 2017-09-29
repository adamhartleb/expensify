import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import createHistory from 'history/createBrowserHistory'
import { firebase } from '../firebase/firebase'
import { loggedIn, loggedOut } from '../actions/auth'
import {
	Dashboard,
	HelpPage,
	NotFound,
	AddExpensePage,
  EditExpensePage,
  LoginPage,
  PrivateRoute
} from '../components'

export const history = createHistory()

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(loggedIn(user.uid))
    history.push('/dashboard')
  } else {
    store.dispatch(loggedOut())
    history.push('/')
  }
})

const AppRouter = () => (
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Switch>
					<Route exact path="/" component={LoginPage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
					<PrivateRoute path="/create" component={AddExpensePage} />
					<PrivateRoute path="/edit/:id" component={EditExpensePage} />
					<Route path="/help" component={HelpPage} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		</Router>
	</Provider>
)

export default AppRouter
