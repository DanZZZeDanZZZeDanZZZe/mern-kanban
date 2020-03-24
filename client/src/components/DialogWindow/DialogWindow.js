import React, { useContext } from 'react'
import './DialogWindow.css'
import { dialogWindowContext } from '../../context/DialogWindow/dialogWindowContext'

function DialogWindow() {
    const {dialogWindowState, hideDialog} = useContext(dialogWindowContext)
    const {visible, title} = dialogWindowState

    if (!visible) return null

    return (

        <div className="dialog-container">
            <div className="bluer"></div>
            <div className="dialog-window">
                <h1>{title}</h1>
                <div className="buttons-container">
                    <button>OK</button>
                    <button onClick={hideDialog}>Сancel</button>
                </div>
            </div>
        </div>
    )
}

export default DialogWindow