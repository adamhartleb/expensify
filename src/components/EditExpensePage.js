import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm'

class EditExpensePage extends Component {
  render() {
    return (
      <div>
        <h1>EditExpensePage</h1>
        <ExpenseForm edit={true} id={this.props.match.params.id} />
      </div>
    );
  }
}

export default EditExpensePage;