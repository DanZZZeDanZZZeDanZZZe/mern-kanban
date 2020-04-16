import React, { useContext } from 'react'
import './DialogWindow.css'
import { dialogWindowContext } from '../../context/DialogWindow/dialogWindowContext'
import { taskBarContext } from '../../context/TaskBar/taskBarContext'

function DialogWindow() {
    const {dialogWindowState, hideDialog} = useContext(dialogWindowContext)
    const {addTaskList } = useContext(taskBarContext)
    const {visible, title, contentType, payload, okHandler, content} = dialogWindowState

    if (!visible) return null
    return (

        <div className="dialog-container">
            <div className="bluer"></div>
            <div className="dialog-window">
                <h1>{title}</h1>
                <div className="content-container">
                    {content}
                </div>
                <div className="buttons-container">
                    <button onClick={()=> {
                        okHandler(payload)
                        hideDialog()
                    }}>OK</button>
                    <button onClick={hideDialog}>Сancel</button>
                </div>
            </div>
        </div>
    )
}

export default DialogWindow