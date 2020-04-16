import React, { useState, useEffect, useContext, useCallback} from 'react';
import './TaskBar.css';
import { TaskHolder } from './TaskHolder/TaskHolder';
import { TaskInfo } from './TaskInfo/TaskInfo';
import { taskBarContext } from '../../context/TaskBar/taskBarContext';

export const TaskBar = () => {
    const { tasksState } = useContext(taskBarContext)
    const [taskId, setTaskId] = useState(null);
    
    return (
            <main className="TaskBar">
                {taskId === null && <div className="TaskContainer">
                    {
                        tasksState.map((item, index) => {                          
                            return (
                                <TaskHolder
                                    item = {item}
                                    key = {index}
                                    index = {index}
                                    setTaskId = {setTaskId}
                                />
                            )
                        })
                    }
                </div>}
                {
                    taskId !== null && 
                    <TaskInfo 
                        setTaskId={setTaskId}
                        taskId={taskId}
                    />
                }
            </main>
    )
}