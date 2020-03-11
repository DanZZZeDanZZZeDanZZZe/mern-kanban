const handlers = {
    DEFAULT: state => state
}

export const taskBarReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}

