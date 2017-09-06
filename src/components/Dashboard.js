import React, { Component } from 'react';
import ExpenseList from './ExpenseList'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ExpenseList />
      </div>
    );
  }
}

export default Dashboard;