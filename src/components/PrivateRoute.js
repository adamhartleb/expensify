import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends Component {
  checkAuth = () => {
    if (this.props.auth.uid) {
      return <Route {...this.props} />
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