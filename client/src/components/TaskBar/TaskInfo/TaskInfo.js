import React, {useContext, useState, useEffect} from 'react';
import './TaskInfo.css';
import Context from '../../../context';


export const TaskInfo = () => {
    const [ titleState, setTitleState] = useState()

    const [ textareaState, setTextareaState ] = useState({
        readOnly: false,
        placeholder: "Enter task description."
    })

    const { setTaskId, taskId, tasksState, setTasksState} = useContext(Context)
    
    function findTitle(id, state) {
        state.forEach(element => {
            element.issues.forEach(el => {
                if (el.id === id ) {
                    setTitleState(el.name)
                    if (el.text) {
                        setTextareaState ({
                            readOnly: true,
                            placeholder: el.text
                        })
                    }
                }
            })
        });
    }

    useEffect(() => {
        findTitle(taskId, tasksState)
    }, []);

    function pressHandler(event) {
        if (event.keyCode === 13){
            setTextareaState({
                ...textareaState,
                readOnly: true
            })
            console.log('33', taskId.replace('task', ''))
            /*setTasksState(...setTasksState, tasksState[elementState.el].issues[elementState])*/

            
        }
    }
    return (
        <div className="TaskInfo">
            <div>
                <h3>{/*findTitle(taskId, tasksState)*/titleState}</h3>
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