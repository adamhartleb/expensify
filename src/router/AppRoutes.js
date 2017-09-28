import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import createHistory from 'history/createBrowserHistory'
import {
	Dashboard,
	Header,
	HelpPage,
	NotFound,
	AddExpensePage,
  EditExpensePage,
  LoginPage
} from '../components'

export const history = createHistory()

const AppRouter = () => (
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={Dashboard} />
					<Route path="/create" component={AddExpensePage} />
					<Route path="/edit/:id" component={EditExpensePage} />
					<Route path="/help" component={HelpPage} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		</Router>
	</Provider>
)

export default AppRouter
