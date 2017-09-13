import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

class ExpenseListItem extends Component {
	render() {
		const { description, amount, createdAt, removeExpense, id } = this.props

		return (
			<div>
				<h3>
					<Link to={`/edit/${id}`}>{description}</Link>
				</h3>
				<p>
					{numeral(amount).format('$0,0.00')}
					-
					{moment(createdAt).format('MMMM Do, YYYY')}
				</p>
			</div>
		)
	}
}

export default ExpenseListItem
