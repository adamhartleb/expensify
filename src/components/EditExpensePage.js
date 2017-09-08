import React, { Component } from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { editExpense } from '../actions/expenses'

class EditExpensePage extends Component {
	render() {
		return (
			<div>
				<h1>EditExpensePage</h1>
				<ExpenseForm
					edit={true}
					expense={this.props.expense[0]}
					onSubmit={updates =>
						this.props.editExpense(this.props.match.params.id, updates)}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.filter(
			expense => expense.id === props.match.params.id
		)
	}
}

export default connect(mapStateToProps, { editExpense })(EditExpensePage)
