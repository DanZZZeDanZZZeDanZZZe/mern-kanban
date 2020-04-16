import React, { useContext } from 'react'
import './UploadContent.css'
import { dialogWindowContext } from '../../../context/DialogWindow/dialogWindowContext'
import { taskBarContext } from '../../../context/TaskBar/taskBarContext'
const UploadContent = () => {
    const { updatePayload } = useContext(dialogWindowContext)
    const { tasksState } = useContext(taskBarContext)
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

export default UploadContent