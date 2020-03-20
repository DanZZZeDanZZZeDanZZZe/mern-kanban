import { SET_STATE, RAIS_THE_TASK, ADD_TASK } from "../types"

const handlers = {
    [SET_STATE]: ({payload}) => ([...payload]),
    [RAIS_THE_TASK]: (state, {payload}) => {
        state[payload.tableIndex].issues = state[payload.tableIndex].issues.filter((it, ind) => {
            if (ind === payload.taskIndex) {
                state[payload.tableIndex+1].issues.push(it)
                return false
            }  
            return true
        })
        return state  
    },
    [ADD_TASK]: (state, {payload: {value, counter}}) => {
        let [stateItem, ...stateResidue] = state  
            
        stateItem.issues.push({ 
            id: `task${counter}`,                 
            name: value             
        })
        
        return [stateItem].concat(stateResidue)
    },
    DEFAULT: state => state
}

export const taskBarReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
