import { SELECTED_PAGE } from '../constants'

export function selectedPage(id) {
    return {
        type: SELECTED_PAGE,
        payload: id
    }
}