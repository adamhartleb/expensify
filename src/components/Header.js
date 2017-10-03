import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import FlatButton from "material-ui/FlatButton"

const styles = {
  button: {
    color: 'white'
  }
}

class Header extends Component {
	render() {
		return (
			<header className='header'>
        <div className='header__content'>
          <Link to='/dashboard' className='header__content-title'>Expensify</Link>
          <FlatButton style={styles.button} onClick={this.props.logout}>Logout</FlatButton>
        </div>
			</header>
		)
	}
}

export default connect(null, { logout })(Header)