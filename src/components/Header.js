import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import { Button } from 'antd'

class Header extends Component {
	render() {
		return (
			<header className='header'>
        <div className='header__content'>
          <Link to='/dashboard' className='header__content-title'>Expensify</Link>
          <Button icon='logout' ghost onClick={this.props.logout}>Logout</Button>
        </div>
			</header>
		)
	}
}

export default connect(null, { logout })(Header)