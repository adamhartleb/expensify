import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../actions/types.js'
import uuid from 'uuid'

const DEFAULT_STATE = [
	{ id: uuid(), description: 'Meow', note: '', amount: 1000, createdAt: 0 },
	{ id: uuid(), description: 'Bill', note: '', amount: 2000, createdAt: 0 }
]

const expensesReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case ADD_EXPENSE:
			return [...state, action.expense]
		case REMOVE_EXPENSE:
			return state.filter(({ id }) => id !== action.id)
		case EDIT_EXPENSE:
			return state.map(expense => {
				return expense.id === action.id
					? { ...expense, ...action.updates }
					: expense
			})
		default:
			return state
	}
}

export default expensesReducer
