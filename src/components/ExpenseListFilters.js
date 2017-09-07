import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

class ExpenseListFilters extends Component {
  handleFilterChange = val => {
    const { sortByAmount, sortByDate } = this.props
    val === "date" ? sortByDate() : sortByAmount() 
  }

	render() {
		const { text, setTextFilter } = this.props
		return (
			<div>
				<input
					type="text"
					value={text}
					onChange={e => setTextFilter(e.target.value)}
				/>
				<select onChange={e => this.handleFilterChange(e.target.value)}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { text: state.text }
}

const mapDispatchToProps = dispatch => {
	return {
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
