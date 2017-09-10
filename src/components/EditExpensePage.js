import React, { Component } from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses'

class EditExpensePage extends Component {
  removeExpense = id => {
    this.props.removeExpense(id)
    this.props.history.replace('/')
  }

  render() {
    const { expense, editExpense, match: { params: { id } } } = this.props
    return (
      <div>
        <h1>EditExpensePage</h1>
        <ExpenseForm
          edit={true}
          expense={expense[0]}
          onSubmit={updates => editExpense(id, updates)}
        />
        <button onClick={() => this.removeExpense(id)}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.filter(
      expense => expense.id === props.match.params.id
    )
  }
}

export default connect(mapStateToProps, { editExpense, removeExpense })(
  EditExpensePage
)
