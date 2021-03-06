import moment from 'moment'
import {
  SET_TEXT_FILTER,
  SET_END_DATE,
  SET_START_DATE,
  SORT_BY_AMOUNT,
  SORT_BY_DATE
} from '../actions/types.js'

const DEFAULT_STATE = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

const filtersReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return { ...state, text: action.text }
    case SORT_BY_AMOUNT:
      return { ...state, sortBy: 'amount' }
    case SORT_BY_DATE:
      return { ...state, sortBy: 'date' }
    case SET_START_DATE:
      return { ...state, startDate: action.startDate }
    case SET_END_DATE:
      return { ...state, endDate: action.endDate }
    default:
      return state
  }
}

export default filtersReducer