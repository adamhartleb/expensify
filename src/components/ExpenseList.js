import React, { Component } from 'react'
import { connect } from 'react-redux'

class ExpenseList extends Component {
  componentDidMount () {
    console.log(this.props.expenses)
  }
	render() {
		return <div>ExpenseList</div>
	}
}

const mapStateToProps = state => ({
  expenses: state.expenses
})

export default connect(mapStateToProps)(ExpenseList)
