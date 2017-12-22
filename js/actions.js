import { FETCHING_DATA, SET_INPUT_DATA, SET_CATEGORY_DATA, SET_SUGGESTION } from './constants'

export function fetchData() {
  return {
    type: FETCHING_DATA
  }
}

export function setSearch(text) {
  return {
    type: SET_INPUT_DATA,
    input: text
  }
}

export function setCategory(value) {
  return {
    type: SET_CATEGORY_DATA,
    category: value
  }
}

export function setSuggestion(value) {
  return {
    type: SET_SUGGESTION,
    selected: value
  }
}

