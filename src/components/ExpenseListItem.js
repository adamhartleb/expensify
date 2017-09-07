import React, { Component } from 'react'

class ExpenseListItem extends Component {
	render() {
		const { description, amount, createdAt } = this.props

		return (
			<div>
				<h3>{description}</h3>
				<p>
					{amount} - {createdAt}
				</p>
			</div>
		)
	}
}

export default ExpenseListItem
