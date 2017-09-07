import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

class ExpenseListItem extends Component {
	render() {
		const { description, amount, createdAt, removeExpense, id } = this.props

		return (
			<div>
				<h3>{description}</h3>
				<p>
					{amount} - {createdAt}
				</p>
        <button onClick={() => removeExpense(id)}>Remove</button>
			</div>
		)
	}
}

export default connect(null, { removeExpense })(ExpenseListItem)
