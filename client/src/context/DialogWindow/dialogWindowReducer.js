import { SHOW_ADD_DIALOG, HIDE_DIALOG, UPDATE_PAYLOAD } from "../types"

const handlers = {
    [SHOW_ADD_DIALOG]: (state, action) => {
        return {
            ...state, 
            visible: true, 
            title: 'Add New List',
            contentType: 'AddContent',
            payload: {position: 1}
        }
    },
    [HIDE_DIALOG]: () => { return {visible: false }},
    [UPDATE_PAYLOAD]: (state, data) => {
        const {payload} = state
        return {
            ...state,
            payload: {...payload, ...data.payload}
        }
    },
    DEFAULT: state => state
}

export const dialogWindowReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT 
    return handle(state, action)
}