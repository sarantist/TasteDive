import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, API_KEY , BASE_URL} from './constants'
import { put, takeEvery, select } from 'redux-saga/effects'

// Requests a list of items based on the search criteria 
function getSimilar(input, category) {
  //input = "the matrix"
  return new Promise(resolve => {
    const url = BASE_URL + '/similar?k=' + API_KEY + '&info=1&type=' + category + '&limit=50' + '&q=' + encodeURIComponent(input);
    fetch(url, {method: "GET"})
      .then((response) => response.json())
      .then((responseData) => {
        resolve(responseData.Similar.Results)
      })
  });
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
  yield takeEvery(FETCHING_DATA, fetchData)
}

export default dataSaga