import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

class AddExpensePage extends Component {
	render() {
		return (
			<div>
				<h1>Add Expense</h1>
				<ExpenseForm 
          onSubmit={expense => this.props.addExpense(expense)} 
        />
			</div>
		)
	}
}

export default connect(null, { addExpense })(AddExpensePage)
