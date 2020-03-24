import React, { useState, useReducer } from 'react';
import { dialogWindowContext } from './dialogWindowContext';
import { dialogWindowReducer } from './dialogWindowReducer';
const DialogWindowState = ({children}) => {
    const [dialogWindowState, dispatch] = useReducer(dialogWindowReducer,{
        visible: false,
    })

    

    return (
        <dialogWindowContext.Provider value={{
            dialogWindowState
        }}>
            {children}
        </dialogWindowContext.Provider>
    )
}

export default DialogWindowState