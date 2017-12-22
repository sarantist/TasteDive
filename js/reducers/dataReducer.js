import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, SET_INPUT_DATA, SET_CATEGORY_DATA, INPUT_DATA_AUTO_COMPLETE, SET_SUGGESTION } from '../constants'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  suggestions: [],
  selectedCategory: 'movies'
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case SET_INPUT_DATA:
      return {
        ...state,
        searchingFor: action.input
      }
    case INPUT_DATA_AUTO_COMPLETE:
      return {
        ...state,
        suggestions: action.data
      }
    case SET_CATEGORY_DATA:
      return {
        ...state,
        selectedCategory: action.category
      }
    case SET_SUGGESTION:
      return {
        ...state,
        searchingFor: action.selected,
        suggestions: []
      }
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        dataFetched: true
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}