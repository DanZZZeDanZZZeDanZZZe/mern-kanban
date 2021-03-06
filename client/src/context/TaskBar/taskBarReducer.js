import { SET_STATE, RAIS_THE_TASK, ADD_TASK, ADD_TASK_LIST, TASK_SETTING, CHECK_AVAILABILITY, DELETE_TASK_LIST } from "../types"

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
            name: value,
            text: null             
        })
        
        return [stateItem].concat(stateResidue)
    },
    [ADD_TASK_LIST]: (state, {payload}) => {
        const {position, title} = payload
        const data = {
            title, 
            issues: [],
            selectionMode: false,
        }
        state.splice(position-1,0, data)
        const newState = [...state]
        return newState
    },
    [DELETE_TASK_LIST]: (state, {payload: { position }}) => {
        state.splice(position-1, 1)
        const newState = [...state]
        return newState
    },
    [TASK_SETTING]: (state, {payload}) => {
        return state.map((item, index) => {
            (index === payload) 
                ? item.selectionMode = true
                : item.selectionMode = false
            return item
        })
    },
    [CHECK_AVAILABILITY]: (state) => {
        let preventValue = true 
        return state.map(item => {
            item.accessibilityMode = preventValue
            preventValue = ( item.issues.length ) 
                ? true
                : false
            return item
        })
    },
    DEFAULT: state => state
}

export const taskBarReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
