import React, { Component } from "react"
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import { startAddExpense } from "../actions/expenses"
import RaisedButton from "material-ui/RaisedButton"

class AddExpensePage extends Component {
	render() {
		const { auth, startAddExpense } = this.props
		return (
			<div className="container">
				<div className="container__header">
					<h1>Add Expense</h1>
					<RaisedButton
						labelColor="white"
						backgroundColor="#212121"
						label="Back"
						onClick={() => this.props.history.push("/dashboard")}
					/>
				</div>
				<ExpenseForm onSubmit={expense => startAddExpense(auth.uid, expense)} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { auth: state.auth }
}

export default connect(mapStateToProps, { startAddExpense })(AddExpensePage)
