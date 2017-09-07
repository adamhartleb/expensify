import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters'

class ExpenseListFilters extends Component {
	render() {
		const { text } = this.props
		return (
			<div>
				<input
					type="text"
					value={text}
					onChange={e => this.props.setTextFilter(e.target.value)}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { text: state.text }
}

export default connect(mapStateToProps, { setTextFilter })(ExpenseListFilters)
