import React, { Component } from "react"
import totalExpenses from "../selectors/expenses-total"

class ExpensesSummary extends Component {
	getTotal = expenses => {
		return totalExpenses(expenses)
	}

	render() {
		const { expenses } = this.props
		const length = expenses.length
		return (
			<div>
				<p className="expense__summary">
					Viewing <b>{length}</b> {length > 1 ? "expenses" : "expense"} totalling{" "}
					<b>{this.getTotal(expenses)}</b>
				</p>
			</div>
		)
	}
}

export default ExpensesSummary
