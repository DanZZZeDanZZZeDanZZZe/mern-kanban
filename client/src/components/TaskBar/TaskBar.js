import React, { useState, useEffect} from 'react';
import './TaskBar.css';
import { TaskHolder } from './TaskHolder/TaskHolder';
import Context from '../../context';

export const TaskBar = () => {
    let [tasksState, setTasksState] = useState(
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

    useEffect(() => {
        console.log('Current state')
        tasksState.forEach(item => {
            console.log(' ',item.title)
            item.issues.forEach(item => {
                console.log('   ', item.name)
            })
        })
    }, [tasksState])

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
        <Context.Provider value = {{ addTask }}>
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
                                />
                            )
                        })
                    }
                </div>
            </main>
        </Context.Provider>
    )
}