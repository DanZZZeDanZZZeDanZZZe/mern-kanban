import React, { useState } from 'react';
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
    return (
        <Context.Provider value = {{ }}>
            <main className="TaskBar">
                <div className="TaskContainer">
                    {
                        tasksState.map(item => {
                            return (
                                <TaskHolder
                                    title = {item.title}
                                    issues = {item.issues}
                                />
                            )
                        })
                    }
                </div>
            </main>
        </Context.Provider>
    )
}