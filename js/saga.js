import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, API_KEY , BASE_URL, SET_INPUT_DATA, INPUT_DATA_AUTO_COMPLETE} from './constants'
import { put, takeLatest, select, throttle } from 'redux-saga/effects'

// Requests a list of items based on the search criteria 
function getSimilar(input, category) {
  //input = "the matrix"
  return new Promise(resolve => {
    const url = BASE_URL + '/similar?k=' + API_KEY + '&info=1&type=' + category + '&limit=25' + '&q=' + encodeURIComponent(input);
    fetch(url, {method: "GET"})
      .then((response) => response.json())
      .then((responseData) => {
        resolve(responseData.Similar.Results)
      })
  });
}

// Ferch autocomplete suggestions
function autoComplete(text) {
  if (text.length <= 3) {
    return;
  }

  return new Promise(resolve => {
    const url = 'https://tastedive.com/api/autocomplete?v=2&t=&q=' + encodeURIComponent(text);
    fetch(url, {method: "GET"})
      .then((response) => response.json())
      .then((responseData) => {
        resolve(responseData.suggestions)
      })
  });
}

function* setSearch(action) {
  try {
    const state = yield select();
    const data = yield autoComplete(state.appData.searchingFor)
    yield put({ type: INPUT_DATA_AUTO_COMPLETE, data })
  } catch (e) {
    //yield put({ type: FETCHING_DATA_FAILURE })
  }
}

// Watches for FETCHING_DATA action
// Triggers the API call
function* fetchData (action) {
  try {
  	const state = yield select();
    const data = yield getSimilar(state.appData.searchingFor, state.appData.selectedCategory)
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

function* dataSaga () {
  yield takeLatest(FETCHING_DATA, fetchData)
  yield throttle(1000, SET_INPUT_DATA, setSearch)
}

export default dataSaga