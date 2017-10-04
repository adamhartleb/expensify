import React, { Component } from "react"
import moment from "moment"
import { SingleDatePicker } from "react-dates"
import { withRouter } from "react-router-dom"
import "react-dates/lib/css/_datepicker.css"
import RaisedButton from "material-ui/RaisedButton"

class ExpenseForm extends Component {
	state = {
		description: "",
		note: "",
		amount: "",
		createdAt: moment(),
		focused: false,
		error: ""
	}

	componentDidMount() {
		if (this.props.edit && !this.props.expense) {
			return this.props.history.replace("/")
		}

		if (this.props.edit) {
			const { description, note, amount, createdAt } = this.props.expense
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

		if (!amount || amount.match(/^\d{1,}([.]\d{0,2})?$/)) {
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
				error: "An amount and description are required"
			}))
		}

		this.props.onSubmit({
			note,
			description,
			amount: parseFloat(amount),
			createdAt: createdAt.valueOf()
		})
		this.props.history.replace("/")
	}

	render() {
		const { description, amount, createdAt, focused, note, error } = this.state

		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="form__container">
						<input
							className="form__item--input"
							type="text"
							placeholder="Description"
							autoFocus
							value={description}
							onChange={this.onDescriptionChange}
						/>

						<input
							className="form__item--input"
							type="text"
							placeholder="Amount"
							onChange={this.onAmountChange}
							value={amount}
						/>
            <div>
						<SingleDatePicker
							date={createdAt}
							onDateChange={this.onDateChange}
							focused={focused}
							onFocusChange={this.onFocusChange}
							numberOfMonths={1}
							isOutsideRange={() => false}
						/>
            </div>
						<textarea
              className="form__item--input textarea"
							placeholder="Add a note for your expense (optional)"
							onChange={this.onNoteChange}
							value={note}
						/>
            <div>
              <RaisedButton
                labelColor="white"
                backgroundColor="#212121"
                label={this.props.edit ? "Edit Expense" : "Add Expense"}
              />
            </div>
					</div>
				</form>
				{error ? <p>{error}</p> : null}
			</div>
		)
	}
}

export default withRouter(ExpenseForm)
