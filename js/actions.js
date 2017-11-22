import { FETCHING_DATA, SET_INPUT_DATA, SET_CATEGORY_DATA, TOGGLE_MODAL, SELECTED_ITEM } from './constants'

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

export function toggleModal() {
  return {
    type: TOGGLE_MODAL
  }
}

export function setSelectedItem(selectedItem) {
  return {
    type: SELECTED_ITEM,
    item: selectedItem
  }
}
