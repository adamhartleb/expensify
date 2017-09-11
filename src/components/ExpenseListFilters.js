import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends Component {
	state = {
		calendarFocused: null
	}

	handleFilterChange = val => {
		const { sortByAmount, sortByDate } = this.props
		val === 'date' ? sortByDate() : sortByAmount()
  }
  
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }))
  }

	render() {
		const {
			filters: { text, sortBy, startDate, endDate },
			setTextFilter
		} = this.props
		return (
			<div>
				<input
					type="text"
					value={text}
					onChange={e => setTextFilter(e.target.value)}
				/>
				<select
					value={sortBy}
					onChange={e => this.handleFilterChange(e.target.value)}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker 
          startDate={startDate}
          endDate={endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { filters: state.filters }
}

const mapDispatchToProps = dispatch => {
	return {
		setTextFilter: text => dispatch(setTextFilter(text)),
		sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: date => dispatch(setStartDate(date)),
    setEndDate: date => dispatch(setEndDate(date))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
