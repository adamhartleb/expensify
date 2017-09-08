import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends Component {
	state = {
		description: '',
		note: '',
    amount: '0.00',
    createdAt: moment(),
    focused: false
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
  
  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }))
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }))
  }

	render() {
    const { description, amount, createdAt, focused, note } = this.state

		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type="text"
						placeholder="Amount"
						onChange={this.onAmountChange}
						value={amount}
					/>
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
					<textarea
						placeholder="Add a note for your expense (optional)"
						onChange={this.onNoteChange}
						value={note}
					/>
					<button>Add Expense</button>
				</form>
			</div>
		)
	}
}

export default ExpenseForm
