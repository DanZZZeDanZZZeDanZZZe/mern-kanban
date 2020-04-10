import React, { useState, useReducer, useContext, useEffect } from 'react';
import { dialogWindowContext } from './dialogWindowContext';
import { dialogWindowReducer } from './dialogWindowReducer';
import { SHOW_ADD_DIALOG, HIDE_DIALOG, UPDATE_PAYLOAD } from '../types';
import { taskBarContext } from '../TaskBar/taskBarContext';
const DialogWindowState = ({children}) => {

    const [dialogWindowState, dispatch] = useReducer(dialogWindowReducer,{
        visible: false,
    })

    useEffect(()=> {
        console.log('dialogWindowState',dialogWindowState)
    }, [dialogWindowState])

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

    const updatePayload = (data) => {
        dispatch ({
            type: UPDATE_PAYLOAD,
            payload: data
        })
    }

    return (
        <dialogWindowContext.Provider value={{
            dialogWindowState,
            showAddDialog,
            hideDialog,
            updatePayload
        }}>
            {children}
        </dialogWindowContext.Provider>
    )
}

export default DialogWindowState