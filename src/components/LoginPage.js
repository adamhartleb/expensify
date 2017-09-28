import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'

class LoginPage extends Component {
  componentWillMount() {
    if (this.props.auth.uid) {
      this.props.history.replace('/dashboard')
    }
  }

	render() {
		return (
      <button onClick={this.props.login}>Login</button>
    )
	}
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { login })(LoginPage)
