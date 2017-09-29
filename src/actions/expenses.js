import uuid from 'uuid'
import db from '../firebase/firebase'

import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, GET_EXPENSES } from './types.js'

export const getExpenses = uid => {
	return dispatch => {
		db.ref(`users/${uid}/expenses`).once('value', snapshot => {
			const expenses = []
			snapshot.forEach(child => {
				expenses.push({
					id: child.key,
					...child.val()
				})
			})

			dispatch({ type: GET_EXPENSES, expenses })
		})
	}
}

export const startAddExpense = (
  uid,
	{ description = '', note = '', amount = 0, createdAt = 0 } = {}
) => {
	const expense = { description, note, amount, createdAt }
	return dispatch => {
		db.ref(`users/${uid}/expenses`).once('child_added', snapshot => {
			dispatch(
				addExpense({
					id: snapshot.key,
					...expense
				})
			)
		})
		db.ref(`users/${uid}/expenses`).push(expense)
	}
}

export const addExpense = expense => ({
	type: ADD_EXPENSE,
	expense
})

export const removeExpense = (uid, id = null, cb) => {
	return dispatch => {
		db.ref(`users/${uid}/expenses/${id}`).remove(() => {
      dispatch({ type: REMOVE_EXPENSE, id })
      cb()
    })
	}
}

export const editExpense = (uid, id, updates) => {
	return dispatch => {
		db.ref(`users/${uid}/expenses/${id}`).update({
			...updates
		}, () =>
			dispatch({
				type: EDIT_EXPENSE,
				id,
				updates
			})
		)
	}
}
