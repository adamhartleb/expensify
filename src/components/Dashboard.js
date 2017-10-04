import React, { Component } from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import { connect } from 'react-redux'
import { getExpenses } from '../actions/expenses'
import selectExpenses from '../selectors/expenses'
import ExpensesSummary from './ExpensesSummary'
import RaisedButton from "material-ui/RaisedButton"

class Dashboard extends Component {
  componentDidMount () {
    this.props.getExpenses(this.props.auth.uid)
  }

  render() {
    return (
      <div className='container'>
        <ExpensesSummary expenses={this.props.expenses} />
        <div>
          <RaisedButton onClick={() => this.props.history.push('/create')} labelColor='white' backgroundColor='#212121' label='Add Expense' />
        </div>
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
  auth: state.auth
})

export default connect(mapStateToProps, { getExpenses })(Dashboard)