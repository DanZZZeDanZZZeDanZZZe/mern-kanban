import React, { useState, useReducer, useContext } from 'react';
import { dialogWindowContext } from './dialogWindowContext';
import { dialogWindowReducer } from './dialogWindowReducer';
import { SHOW_ADD_DIALOG, HIDE_DIALOG } from '../types';
import { taskBarContext } from '../TaskBar/taskBarContext';
const DialogWindowState = ({children}) => {

    const [dialogWindowState, dispatch] = useReducer(dialogWindowReducer,{
        visible: false,
    })

    const {TaskBarState}= useContext(taskBarContext)

    const showAddDialog = () => {
        dispatch ({
            type: SHOW_ADD_DIALOG
        })
    }

    const hideDialog = () => {
        dispatch ({
            type: HIDE_DIALOG
        })
    }

    return (
        <dialogWindowContext.Provider value={{
            dialogWindowState,
            showAddDialog,
            hideDialog
        }}>
            {children}
        </dialogWindowContext.Provider>
    )
}

export default DialogWindowState