import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

class AddExpensePage extends Component {
	render() {
    const { auth, startAddExpense } = this.props
		return (
			<div>
				<h1>Add Expense</h1>
				<ExpenseForm
          onSubmit={expense => startAddExpense(auth.uid, expense)}
        />
			</div>
		)
	}
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { startAddExpense })(AddExpensePage)
