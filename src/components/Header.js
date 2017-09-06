import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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
			</header>
		)
	}
}

export default Header
