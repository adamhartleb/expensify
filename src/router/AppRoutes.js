import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers'
import {
  Dashboard,
  Header,
  HelpPage,
  NotFound,
  AddExpensePage,
  EditExpensePage
} from '../components'

const AppRouter = () => (
  <Provider store={createStore(reducers)}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/create' component={AddExpensePage} />
          <Route path='/edit/:id' component={EditExpensePage} />
          <Route path='/help' component={HelpPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default AppRouter