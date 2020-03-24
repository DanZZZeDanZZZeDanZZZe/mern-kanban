import React, { useContext } from 'react'
import './DialogWindow.css'
import DialogWindowState from '../../context/DialogWindow/DialogWindowState'
import { dialogWindowContext } from '../../context/DialogWindow/dialogWindowContext'

function DialogWindow() {
    const {dialogWindowState, setDialogWindowState} = useContext(dialogWindowContext)
    const {visible} = dialogWindowState

    if (!visible) return null

    return (

        <div className="dialog-container">
            <div className="bluer"></div>
            <div className="dialog-window"></div>
        </div>
    )
}

export default DialogWindow