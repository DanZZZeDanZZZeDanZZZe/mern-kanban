import React, { useState, useEffect, useContext} from 'react';
import './TaskBar.css';
import { TaskHolder } from './TaskHolder/TaskHolder';
import Context from '../../context';
import { TaskInfo } from './TaskInfo/TaskInfo';
import { taskBarContext } from '../../context/TaskBar/taskBarContext';

export const TaskBar = () => {
    const taskBar = useContext(taskBarContext)

    const tasksState = taskBar.tasksState

    const [taskId, setTaskId] = useState(null);
    const [fieldActivity, setFieldActivity] = useState(new Array(tasksState.length).fill(false))
    const [buttonsActivity, setButtonsActivity] = useState(
        () => {
            let arr = new Array(tasksState.length).fill(null)
            return mutateButtonsActivity(arr)
        }
    )

    useEffect(() => {
        console.log('tasksState', tasksState)
    }, [tasksState]);

    useEffect(() => {
        setButtonsActivity(mutateButtonsActivity(buttonsActivity))
    }, [tasksState])

    function mutateButtonsActivity(buttonsActivity) {
        return buttonsActivity.map((item, index) => {
            if (index === 0 ) return true;
            if (tasksState[index-1].issues.length > 0) return true
            return false 
        })
    }

    function changeActivity(index) {
        setFieldActivity(
            fieldActivity.map((item, ind) => {
                return ind === index ? !item : false
            })
        )
    }

    return (
        <Context.Provider value = {{ changeActivity, taskId, setTaskId}}>
            <main className="TaskBar">
                {taskId === null && <div className="TaskContainer">
                    {
                        tasksState.map((item, index) => {                          
                            return (
                                <TaskHolder
                                    item = {item}
                                    key = {index}
                                    index = {index}
                                    activity = {{
                                        field: fieldActivity[index],
                                        button: buttonsActivity[index]
                                    }}
                                />
                            )
                        })
                    }
                </div>}
                {taskId !== null && <TaskInfo/>}
            </main>
        </Context.Provider>
    )
}