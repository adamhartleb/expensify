import React, { Component } from "react"
import { connect } from "react-redux"
import { login } from "../actions/auth"
import RaisedButton from "material-ui/RaisedButton"

class LoginPage extends Component {
	componentWillMount() {
		if (this.props.auth.uid) {
			this.props.history.replace("/dashboard")
		}
	}

	render() {
		return (
			<div className="box-layout">
				<h1 className="box-layout__title">Expensify</h1>

				<RaisedButton
					label="LOGIN"
					onClick={this.props.login}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { auth: state.auth }
}

export default connect(mapStateToProps, { login })(LoginPage)
