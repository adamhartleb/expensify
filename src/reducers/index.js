import { combineReducers } from 'redux'

import expensesReducer from './expenses'
import filtersReducer from  './filters'
import authReducer from './auth'

export default combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  auth: authReducer
})