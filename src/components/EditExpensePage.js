import React, { Component } from "react"
import ExpenseForm from "./ExpenseForm"
import { connect } from "react-redux"
import { editExpense, removeExpense } from "../actions/expenses"
import RaisedButton from "material-ui/RaisedButton"

class EditExpensePage extends Component {
	removeExpense = id => {
		this.props.removeExpense(this.props.auth.uid, id, () => {
			this.props.history.replace("/")
		})
	}

	render() {
		const { expense, auth, editExpense, match: { params: { id } } } = this.props
		return (
			<div className="container">
				<div className="container__header">
					<h1>Edit Expense</h1>
					<RaisedButton
						labelColor="white"
						backgroundColor="#212121"
						label="Back"
						onClick={() => this.props.history.push("/dashboard")}
					/>
				</div>
				<ExpenseForm
					edit={true}
					expense={expense[0]}
					onSubmit={updates => editExpense(auth.uid, id, updates)}
				/>
				<div>
					<RaisedButton
						onClick={() => this.removeExpense(id)}
						secondary={true}
						label="Remove Expense"
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.filter(expense => expense.id === props.match.params.id),
		auth: state.auth
	}
}

export default connect(mapStateToProps, { editExpense, removeExpense })(EditExpensePage)
