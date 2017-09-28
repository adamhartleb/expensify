import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'

class Header extends Component {
	render() {
		return (
			<header>
				<h1>This is my header</h1>
				<NavLink exact to="/" activeClassName="selected">
					Home
				</NavLink>
				<NavLink to="/create" activeClassName="selected">
					Add
				</NavLink>
				<NavLink to="/edit" activeClassName="selected">
					Edit
				</NavLink>
				<NavLink to="/help" activeClassName="selected">
					Help
				</NavLink>
        <button onClick={this.props.logout}>Logout</button>
			</header>
		)
	}
}

export default connect(null, { logout })(Header)
