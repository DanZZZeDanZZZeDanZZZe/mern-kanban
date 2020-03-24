const handlers = {
    SHOW_ADD_DIALOG: (state, action) => {
        return {...state, visible: !state.visible}
    },

    DEFAULT: state => state
}

export const dialogWindowReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT 
    return handle(state, action)
}