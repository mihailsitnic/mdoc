import { combineReducers } from 'redux'
import pahtReducer from './pahtReducer'

export default combineReducers({
    page: pahtReducer
})