import { SHOW_ADD_DIALOG, HIDE_DIALOG } from "../types"

const handlers = {
    [SHOW_ADD_DIALOG]: (state, action) => {
        return {...state, visible: true, title: 'Add New List'}
    },
    [HIDE_DIALOG]: () => { return {visible: false }},
    DEFAULT: state => state
}

export const dialogWindowReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT 
    return handle(state, action)
}