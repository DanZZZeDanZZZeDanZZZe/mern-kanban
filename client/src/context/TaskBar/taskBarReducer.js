import { SET_STATE, RAIS_THE_TASK } from "../types"

const handlers = {
    [SET_STATE]: (state, {payload}) => ([...payload]),
    [RAIS_THE_TASK]: (state, {payload}) => {
        state[payload.tableIndex].issues = state[payload.tableIndex].issues.filter((it, ind) => {
            if (ind === payload.taskIndex) {
                state[payload.tableIndex+1].issues.push(it)
                return false
            }  
            return true
        })
        console.log('!', state)
        return state  
    },
    DEFAULT: state => state
}

export const taskBarReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}

