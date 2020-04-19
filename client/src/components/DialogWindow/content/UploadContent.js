import React, { useContext } from 'react'
import './UploadContent.css'
import { dialogWindowContext } from '../../../context/DialogWindow/dialogWindowContext'
import { taskBarContext } from '../../../context/TaskBar/taskBarContext'
const UploadContent = ({type}) => {
    const { updatePayload } = useContext(dialogWindowContext)
    const { tasksState } = useContext(taskBarContext)

    let content = null
    const param = {updatePayload, tasksState}

    switch (type) {
        case 'SHOW_ADD_DIALOG':
            content = <AddContent {...param}/>
            break
        case 'SHOW_DELETE_DIALOG':
            content = <DeleteContent {...param}/>
            break
        default:
            break
    }

    return content
}

const AddContent = ({updatePayload, tasksState}) => {

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

const DeleteContent = ({updatePayload, tasksState}) => {

    const options = tasksState.map((item, index) => {
        return (
            <option 
                key={index}
                value={index+1}
            >
                {item.title}
            </option>
        )
    })

    return (
        <div>
            <label htmlFor="select-position">Select a list name:</label> 
            <select
                id="select-position" 
                onChange={(e) => {
                    updatePayload({position: e.target.value})
            }}>
                {options}
            </select>
        </div>
    )
}

export default UploadContent