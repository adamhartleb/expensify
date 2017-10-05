import React, { Component } from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'

import ExpenseListItem from './ExpenseListItem'


class ExpenseList extends Component {
	render() {
		return (
      <div>
        <div className="expense__header">
          <p>Expense</p>
          <p>Amount</p>
        </div>
        {this.props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />
        })}
      </div>
    )
	}
}

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
