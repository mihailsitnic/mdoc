import { SELECTED_PAGE } from '../constants'

export default (page = '', action) => {
    return action.type === SELECTED_PAGE ? action.payload : page
}