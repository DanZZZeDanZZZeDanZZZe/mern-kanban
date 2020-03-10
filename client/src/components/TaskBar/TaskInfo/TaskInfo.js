import React, {useContext, useState, useEffect} from 'react';
import './TaskInfo.css';
import Context from '../../../context';


export const TaskInfo = () => {
    const { setTaskId, taskId, tasksState, setTasksState} = useContext(Context)

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
        const currentElement = state.reduce((previousValue, item, index) => {
            item.issues.forEach((el, ind) => {
                if (el.id === id ) {
                    previousValue = {
                        tableIndex: index,
                        taskIndex: ind
                    }
                }
            }) 
            if (previousValue) return previousValue 
        }) 
        return currentElement
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