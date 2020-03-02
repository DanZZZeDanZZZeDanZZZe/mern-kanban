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



    function addTask(index, value, state = tasksState, setState = setTasksState) {
        if (index === 0) {
            let [stateItem, ...stateResidue] = state
            
            stateItem.issues.push({ 
                id: `task${state[0].issues.length+1}`,                 
                name: value             
            })
            const arr = [stateItem]
            setState(arr.concat(stateResidue))
        }
    }
    
    return (
        <Context.Provider value = {{ addTask, changeActivity, getIssues}}>
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