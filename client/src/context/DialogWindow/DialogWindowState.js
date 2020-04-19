import React, { useState, useReducer, useContext, useEffect } from 'react';
import { dialogWindowContext } from './dialogWindowContext';
import { dialogWindowReducer } from './dialogWindowReducer';
import { SHOW_ADD_DIALOG, HIDE_DIALOG, UPDATE_PAYLOAD, SHOW_DELETE_DIALOG } from '../types';
import { taskBarContext } from '../TaskBar/taskBarContext';
import UploadContent from "../../components/DialogWindow/content/UploadContent"
const DialogWindowState = ({children}) => {
    const { addTaskList } = useContext(taskBarContext)
    const [dialogWindowState, dispatch] = useReducer(dialogWindowReducer,{
        visible: false,
    })

    useEffect(()=> {
        console.log('dialogWindowState',dialogWindowState)
    }, [dialogWindowState])

    const showAddDialog = () => {
        const type = SHOW_ADD_DIALOG
        dispatch ({
            type: type,
            payload: {
                addTaskList: addTaskList,
                content: <UploadContent type={type}/>
            }
        })
    }

    // const showDeleteDialog = () => {
    //     dispatch ({
    //         type: SHOW_DELETE_DIALOG,
    //         payload: {
    //             addTaskList: deleteTaskList,
    //             content: //<UploadContent/>
    //         }
    //     })
    // }

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