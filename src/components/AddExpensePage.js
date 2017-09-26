import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

class AddExpensePage extends Component {
	render() {
		return (
			<div>
				<h1>Add Expense</h1>
				<ExpenseForm
          onSubmit={expense => this.props.startAddExpense(expense)}
        />
			</div>
		)
	}
}

export default connect(null, { startAddExpense })(AddExpensePage)
