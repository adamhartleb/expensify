import React, { Component } from 'react'
import totalExpenses from '../selectors/expenses-total'

class ExpensesSummary extends Component {
	getTotal = expenses => {
		return totalExpenses(expenses)
	}

	render() {
		return (
			<div>
				<h3>Total: {this.getTotal(this.props.expenses)}</h3>
			</div>
		)
	}
}

export default ExpensesSummary
