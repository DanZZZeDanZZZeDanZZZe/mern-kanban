import React, {useContext, useState, useEffect} from 'react';
import './TaskInfo.css';
import { taskBarContext } from '../../../context/TaskBar/taskBarContext';


export const TaskInfo = ({ setTaskId, taskId}) => {
    const taskBar = useContext(taskBarContext)

    const tasksState = taskBar.tasksState

    const [ currentElementState, setCurrentElementState] = useState(findInfo(taskId, tasksState))

    const [ textareaState, setTextareaState ] = useState(()=> {
        const text = tasksState[currentElementState.tableIndex].issues[currentElementState.taskIndex].text
        if (text) {
            return {
                readOnly: true,
                placeholder: text
            }
        } else {
            return {
                readOnly: false,
                placeholder: "Enter task description."
            }
        }
        
    })

    function findInfo(id, state) {
        let previousValue;

        state.forEach((item, index) => {
            item.issues.forEach((el, ind) => {
                if (el.id === id ) {
                    previousValue = {
                        tableIndex: index,
                        taskIndex: ind
                    }
                }
            }) 
        })

        return previousValue
    }

    function pressHandler(event) {
        if (event.keyCode === 13){
            setTextareaState({
                ...textareaState,
                readOnly: true
            })
                tasksState[currentElementState.tableIndex]
                    .issues[currentElementState.taskIndex]
                    .text = event.target.value
        }
    }
    
    return (
        <div className="TaskInfo">
            <div>
                <h3>{
                    tasksState[currentElementState.tableIndex]
                    .issues[currentElementState.taskIndex]
                    .name
                }</h3>
                <button 
                    onClick = {() => {
                        setTaskId(null)
                    }}
                >
                    <img src="exit.svg" alt="exit"/>
                </button>
            </div>
            <div>
                <textarea 
                    {...textareaState} 
                    onKeyDown={pressHandler}
                >
                </textarea>
            </div>
        </div>
    )
}