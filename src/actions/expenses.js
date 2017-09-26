import uuid from 'uuid'
import db from '../firebase/firebase'

const ref = db.ref('expenses')

import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, GET_EXPENSES } from './types.js'

export const getExpenses = () => {
	return dispatch => {
		ref.once('value', snapshot => {
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
	{ description = '', note = '', amount = 0, createdAt = 0 } = {}
) => {
	const expense = { description, note, amount, createdAt }
	return dispatch => {
		ref.once('child_added', snapshot => {
			console.log('fired')
			dispatch(
				addExpense({
					id: snapshot.key,
					...expense
				})
			)
		})
		ref.push(expense)
	}
}

export const addExpense = expense => ({
	type: ADD_EXPENSE,
	expense
})

export const removeExpense = (id = null) => {
	return dispatch => {
		db.ref(`expenses/${id}`).remove(() => {
			dispatch({
				type: REMOVE_EXPENSE,
				id
			})
		})
	}
}

export const editExpense = (id, updates) => {
	return dispatch => {
		db.ref(`expenses/${id}`).update({
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
