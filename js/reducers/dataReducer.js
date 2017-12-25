import { Keyboard } from 'react-native'
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, SET_INPUT_DATA, SET_CATEGORY_DATA, INPUT_DATA_AUTO_COMPLETE, SET_SUGGESTION } from '../constants'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  suggestions: [],
  selectedCategory: 'movies'
}

// Hide keyboard for specific actions
function keyBoardDismiss(action) {
  const hideOn = [SET_SUGGESTION, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE];
  if (hideOn.indexOf(action.type) != -1 ) {
    Keyboard.dismiss();
  }
}

// TODO: Split this reducer
export default function dataReducer (state = initialState, action) {
  keyBoardDismiss(action);

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
        dataFetched: true,
        resultsLength : action.data.length
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