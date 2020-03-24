import React, { useContext } from 'react'
import './DialogWindow.css'
import { dialogWindowContext } from '../../context/DialogWindow/dialogWindowContext'

function DialogWindow() {
    const {dialogWindowState, hideDialog} = useContext(dialogWindowContext)
    const {visible, title, contentType} = dialogWindowState
    let content = null
    if (!visible) return null
    if (contentType === 'AddContent') {
        content = (
            <React.Fragment>
                <label htmlFor="input-name">Enter a list name:</label>
                <input type="text" id="input-name"/>
            </React.Fragment>
        )
    } 
    
    return (

        <div className="dialog-container">
            <div className="bluer"></div>
            <div className="dialog-window">
                <h1>{title}</h1>
                <div className="content-container">
                    {content}
                </div>
                <div className="buttons-container">
                    <button>OK</button>
                    <button onClick={hideDialog}>Сancel</button>
                </div>
            </div>
        </div>
    )
}

export default DialogWindow