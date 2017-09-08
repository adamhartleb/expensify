import React, { Component } from 'react'

class ExpenseForm extends Component {
	state = {
		description: '',
		note: '',
		amount: '0.00'
	}

	onDescriptionChange = e => {
		const description = e.target.value
		this.setState(() => ({ description }))
	}

	onNoteChange = e => {
		const note = e.target.value
		this.setState(() => ({ note }))
	}

	onAmountChange = e => {
		let amount = e.target.value

		if (amount.match(/^\d*(.\d{0,2})?$/)) {
			this.setState(() => ({ amount }))
		}
	}
	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type="text"
						placeholder="Amount"
						onChange={this.onAmountChange}
						value={this.state.amount}
					/>
					<textarea
						placeholder="Add a note for your expense (optional)"
						onChange={this.onNoteChange}
						value={this.state.note}
					/>
					<button>Add Expense</button>
				</form>
			</div>
		)
	}
}

export default ExpenseForm
