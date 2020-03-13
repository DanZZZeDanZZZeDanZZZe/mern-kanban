import { SET_STATE } from "../types"

const handlers = {
    [SET_STATE]: (state, {payload}) => ([...payload]),
    DEFAULT: state => state
}

export const taskBarReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}

