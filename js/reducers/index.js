import { combineReducers } from 'redux'
import appData from './dataReducer'
import nav from './navReducer'

const rootReducer = combineReducers({
    appData,
    nav
})

export default rootReducer