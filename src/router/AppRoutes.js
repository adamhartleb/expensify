import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {
  Dashboard,
  Header,
  HelpPage,
  NotFound,
  AddExpensePage,
  EditExpensePage
} from '../components'

const AppRouter = () => (
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
)

export default AppRouter