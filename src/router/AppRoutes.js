import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'

import {
	Dashboard,
	Header,
	HelpPage,
	NotFound,
	AddExpensePage,
	EditExpensePage
} from '../components'



const AppRouter = () => (
	<Provider store={store}>
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Dashboard} />
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
