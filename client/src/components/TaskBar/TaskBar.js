import React, { useState, useEffect, useContext} from 'react';
import './TaskBar.css';
import { TaskHolder } from './TaskHolder/TaskHolder';
import Context from '../../context';
import { TaskInfo } from './TaskInfo/TaskInfo';
import { taskBarContext } from '../../context/TaskBar/taskBarContext';

export const TaskBar = () => {
    const taskBar = useContext(taskBarContext)

    const tasksState = taskBar.tasksState
    const setTasksState = taskBar.setTasksState
    let counter = taskBar.counter
    const setCounter = taskBar.setCounter

    const [taskId, setTaskId] = useState(null);
    const [fieldActivity, setFieldActivity] = useState(new Array(tasksState.length).fill(false))
    const [buttonsActivity, setButtonsActivity] = useState(
        () => {
            let arr = new Array(tasksState.length).fill(null)
            return mutateButtonsActivity(arr)
        }
    )

    useEffect(() => {
        console.log('taskId', taskId)
    }, [taskId]);

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

    function getIssues(index) {
        return tasksState[index].issues
    }

    function changeActivity(index) {
        setFieldActivity(
            fieldActivity.map((item, ind) => {
                return ind === index ? !item : false
            })
        )
    }

    function raisTheTask(taskIndex, tableIndex) {
        changeActivity(tableIndex + 1)

        let buff = {}
        const newIssues = tasksState[tableIndex].issues.filter((it, ind) => {
            if (ind === taskIndex) {
                buff = it
                return false
            }  
            return true
        })
        setTasksState(
            tasksState.map((it, ind) => {
                if (tableIndex === ind) {
                    it.issues = newIssues
                } 
                if (tableIndex + 1 === ind) {
                    it.issues.push(buff)
                } 
                return it    
            })
        )
    }

    function addTask(index, value, state = tasksState, setState = setTasksState) {
        if (index === 0) {
            let [stateItem, ...stateResidue] = state
            setCounter(counter + 1);
            stateItem.issues.push({ 
                id: `task${counter}`,                 
                name: value             
            })
            const arr = [stateItem]
            setState(arr.concat(stateResidue))
        }
    }

    return (
        <Context.Provider value = {{ addTask, changeActivity, getIssues, raisTheTask, taskId, setTaskId}}>
            <main className="TaskBar">
                {taskId === null && <div className="TaskContainer">
                    {
                        tasksState.map((item, index) => {                          
                            return (
                                <TaskHolder
                                    title = {item.title}
                                    issues = {item.issues}
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