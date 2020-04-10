import React, { useContext } from 'react'
import './DialogWindow.css'
import { dialogWindowContext } from '../../context/DialogWindow/dialogWindowContext'
import { taskBarContext } from '../../context/TaskBar/taskBarContext'

function DialogWindow() {
    const {dialogWindowState, hideDialog, updatePayload} = useContext(dialogWindowContext)
    const { tasksState, addTaskList } = useContext(taskBarContext)
    const {visible, title, contentType, payload} = dialogWindowState

    let content = null
    let okHandler = null

    if (!visible) return null
    if (contentType === 'AddContent') {
        content = UploadContent(tasksState, updatePayload)
        okHandler = addTaskList
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

const UploadContent = (tasksState, updatePayload) => {
    const options = tasksState.map((item, index) => {
        return (
            <option 
                key={index}
                value={index+1}
            >
                {index + 1}
            </option>
        )
    })

    return (
        <React.Fragment>
                <div>
                    <label htmlFor="input-name">Enter a list name:</label>
                    <input 
                        type="text" 
                        id="input-name" 
                        onChange={(e) => {
                            updatePayload({title: e.target.value})
                        }}/>
                </div>
    
                <div>
                    <label htmlFor="select-position">Select position:</label>
                    <select 
                        id="select-position" 
                        onChange={(e) => {
                            updatePayload({position: e.target.value})
                        }}>
                        {options}
                    </select>
                </div>
            </React.Fragment>
    )
}
export default DialogWindow