import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../actions/types.js'

const DEFAULT_STATE = [
	{ description: 'Meow', note: '', amount: 0, createdAt: 0 },
	{ description: 'Bill', note: '', amount: 0, createdAt: 0 }
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
