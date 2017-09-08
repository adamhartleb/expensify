import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends Component {
	state = {
		description: '',
		note: '',
		amount: '',
		createdAt: moment(),
		focused: false,
		error: ''
	}

	componentDidMount() {
		if (this.props.edit) {
      const [ expense ] = this.props.expense
      const { description, note, amount, createdAt } = expense
			this.setState(() => ({
        description,
        note,
        amount,
        createdAt: moment(createdAt)
			}))
		}
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

		if (!amount || amount.match(/^\d{1,}(.\d{0,2})?$/)) {
			this.setState(() => ({ amount }))
		}
	}

	onDateChange = createdAt => {
		if (createdAt) {
			this.setState(() => ({ createdAt }))
		}
	}

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ focused }))
	}

	onSubmit = e => {
		e.preventDefault()
		const { description, amount, createdAt, note } = this.state

		if (!description || !amount) {
			return this.setState(() => ({
				error: 'An amount and description are required'
			}))
		}

		this.props.onSubmit({
			note,
			description,
			amount: parseFloat(amount),
			createdAt: createdAt.valueOf()
		})
		this.setState(() => ({
			error: '',
			note: '',
			amount: '',
			createdAt: moment(),
			description: ''
		}))
	}

	render() {
		const { description, amount, createdAt, focused, note, error } = this.state

		return (
			<div>
				<form onSubmit={this.onSubmit}>
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
				{error ? <p>{error}</p> : null}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	if (props.edit) {
		return {
			expense: state.expenses.filter(expense => expense.id === props.id)
		}
  }
  return {}
}

export default connect(mapStateToProps)(ExpenseForm)
