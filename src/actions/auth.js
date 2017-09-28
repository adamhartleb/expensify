import { firebase, googleAuthProvider } from '../firebase/firebase'
import { LOGIN, LOGOUT } from './types'

export const loggedIn = uid => ({
  type: LOGIN,
  uid
})

export const loggedOut = () => ({
  type: LOGOUT
})

export const login = () => {
  return dispatch => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

export const logout = () => {
  return dispatch => {
    return firebase.auth().signOut()
  }
}