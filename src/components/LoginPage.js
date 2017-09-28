import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'

class LoginPage extends Component {
	render() {
		return (
      <button onClick={this.props.login}>Login</button>
    )
	}
}

export default connect(null, { login })(LoginPage)
