import React, { useState, useEffect} from 'react';
import './TaskBar.css';
import { TaskHolder } from './TaskHolder/TaskHolder';
import Context from '../../context';

export const TaskBar = () => {
    const titles = ['Backlog', 'Ready', 'In progress', 'Finished']
    const kanbanInfoJSON = localStorage.getItem('kanbanInfo')

    const [tasksState, setTasksState] = useState( 
        kanbanInfoJSON 
            ? JSON.parse(kanbanInfoJSON).tasksState
            : titles.map( item => {
                return {         
                    title: item,         
                    issues: []   
                }
            })
    )
    let [counter, setCounter] = useState(
        kanbanInfoJSON 
            ? JSON.parse(kanbanInfoJSON).counter
            : 0
    )

    const [fieldActivity, setFieldActivity] = useState(new Array(tasksState.length).fill(false))

    useEffect(() => {
        const serialTasksState = JSON.stringify({tasksState, counter})
        localStorage.setItem('kanbanInfo', serialTasksState)
    }, [tasksState])

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
            setCounter(++counter)
            stateItem.issues.push({ 
                id: `task${counter}`,                 
                name: value             
            })
            const arr = [stateItem]
            setState(arr.concat(stateResidue))
        }
    }
    
    return (
        <Context.Provider value = {{ addTask, changeActivity, getIssues, raisTheTask}}>
            <main className="TaskBar">
                <div className="TaskContainer">
                    {
                        tasksState.map((item, index) => {                          
                            return (
                                <TaskHolder
                                    title = {item.title}
                                    issues = {item.issues}
                                    key = {index}
                                    index = {index}
                                    activity = {fieldActivity[index]}
                                />
                            )
                        })
                    }
                </div>
            </main>
        </Context.Provider>
    )
}