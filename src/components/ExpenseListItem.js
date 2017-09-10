import React, { Component } from 'react'
import { connect } from 'react-redux'
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
          {amount} - {createdAt}
        </p>
      </div>
    )
  }
}

export default ExpenseListItem
