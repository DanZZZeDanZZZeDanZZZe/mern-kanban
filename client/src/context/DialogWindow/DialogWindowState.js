import React, { useState, useReducer } from 'react';
import { dialogWindowContext } from './dialogWindowContext';
import { dialogWindowReducer } from './dialogWindowReducer';
import { SHOW_ADD_DIALOG } from '../types';
const DialogWindowState = ({children}) => {
    const [dialogWindowState, dispatch] = useReducer(dialogWindowReducer,{
        visible: false,
    })

    const showAddDialog = () => {
        dispatch ({
            type: SHOW_ADD_DIALOG
        })
    }

    return (
        <dialogWindowContext.Provider value={{
            dialogWindowState,
            showAddDialog
        }}>
            {children}
        </dialogWindowContext.Provider>
    )
}

export default DialogWindowState