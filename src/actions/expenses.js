import uuid from 'uuid'
import db from '../firebase/firebase'

import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, GET_EXPENSES } from './types.js'

export const getExpenses = uid => {
	return dispatch => {
		db.ref(`expenses/${uid}`).once('value', snapshot => {
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
		db.ref(`expenses/${uid}`).once('child_added', snapshot => {
			dispatch(
				addExpense({
					id: snapshot.key,
					...expense
				})
			)
		})
		db.ref(`expenses/${uid}`).push(expense)
	}
}

export const addExpense = expense => ({
	type: ADD_EXPENSE,
	expense
})

export const removeExpense = (uid, id = null, cb) => {
	return dispatch => {
		db.ref(`expenses/${uid}/${id}`).remove(() => {
      dispatch({ type: REMOVE_EXPENSE, id })
      cb()
    })
	}
}

export const editExpense = (uid, id, updates) => {
	return dispatch => {
		db.ref(`expenses/${uid}/${id}`).update({
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
