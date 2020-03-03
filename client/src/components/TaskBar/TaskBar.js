import React, { useState, useEffect} from 'react';
import './TaskBar.css';
import { TaskHolder } from './TaskHolder/TaskHolder';
import Context from '../../context';

export const TaskBar = () => {
    const [tasksState, setTasksState] = useState(
        [    
            {         
                title: 'Backlog',         
                issues: [             
                    { 
                        id: 'task1',                 
                        name: 'Sprint bugfix'             
                    },
                    { 
                        id: 'task2',                 
                        name: 'Sprint bugfix'             
                    }            
                ],   
            },  
            {         
                title: 'Ready',         
                issues: []  
            },  
            {         
                title: 'In progress',         
                issues: []  
            },  
            {         
                title: 'Finished',         
                issues: []  
            },  
        ]
    )
    const [fieldActivity, setFieldActivity] = useState(new Array(tasksState.length).fill(false))
    let [counter, setCounter] = useState(2)
    useEffect(() => {
        console.log(tasksState, fieldActivity)
    }, [tasksState, fieldActivity])

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
        console.log('new state', tasksState)
    /*    console.log('newIssues', newIssues)*/
       /* tasksState[tableIndex+1].issues.push(buff)
      /*  tasksState[tableIndex].issues = newIssues*/
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