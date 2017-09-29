import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'

class PrivateRoute extends Component {
  checkAuth = () => {
    const { component: Component, ...rest } = this.props
    if (this.props.auth.uid) {
      return <Route {...rest} component={props => (
          <div><Header /><Component {...props} /></div>
        )} />
    } else {
      return <Redirect to='/' />
    }
  }

  render() {
    return this.checkAuth()
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(PrivateRoute)