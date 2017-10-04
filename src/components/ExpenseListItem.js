import React, { Component } from "react"
import { connect } from "react-redux"
import moment from "moment"
import numeral from "numeral"
import { Link } from "react-router-dom"

class ExpenseListItem extends Component {
	render() {
		const { description, amount, createdAt, removeExpense, id } = this.props

		return (
			<Link className="expense__link" to={`/edit/${id}`}>
				<div className="expense__container">
					<h3>{description}</h3>
					<p className="expense__amount">{numeral(amount).format("$0,0.00")}</p>
					<p className="expense__date">{moment(createdAt).format("MMMM Do, YYYY")}</p>
				</div>
			</Link>
		)
	}
}

export default ExpenseListItem
