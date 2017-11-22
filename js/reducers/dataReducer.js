import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, SET_INPUT_DATA, SET_CATEGORY_DATA, TOGGLE_MODAL, SELECTED_ITEM } from '../constants'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  modalVisible: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {

    case SELECTED_ITEM: 
      return {
        ...state,
        selectedItem: action.item
      } 
    
    case TOGGLE_MODAL:
      return{
        ...state,
        modalVisible : !state.modalVisible
      }

    case SET_INPUT_DATA:
      return {
        ...state,
        searchingFor: action.input
      }
    case SET_CATEGORY_DATA:
      return {
        ...state,
        selectedCategory: action.category
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
        data: action.data
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