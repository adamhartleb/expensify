import React, { Component } from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    );
  }
}

export default Dashboard;