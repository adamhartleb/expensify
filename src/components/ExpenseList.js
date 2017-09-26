import React, { Component } from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import ExpensesSummary from './ExpensesSummary'
import ExpenseListItem from './ExpenseListItem'
import { getExpenses } from '../actions/expenses'

class ExpenseList extends Component {
  componentDidMount () {
    this.props.getExpenses()
  }

	render() {
		return (
      <div>
        <h1>Expense List</h1>
        {this.props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />
        })}
        <ExpensesSummary expenses={this.props.expenses} />
      </div>
    )
	}
}

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps, { getExpenses })(ExpenseList)
