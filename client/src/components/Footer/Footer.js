import React,{ useContext, useState, useEffect } from 'react';
import './Footer.css';
import { taskBarContext } from '../../context/TaskBar/taskBarContext';


export const Footer = () => {
    const initState = (tasksState) => {
        return {
            activedTasks: tasksState[0].issues.length,
            finishedTasks: tasksState[tasksState.length-1].issues.length, 
        }
    }

    const {tasksState} = useContext(taskBarContext)
    const [footerState, setFooterState] = useState(initState(tasksState))
    
    useEffect(() => {
        setFooterState(initState(tasksState))
    }, [tasksState]);
   
    return (
        <div className="Footer">
            <p>{`Actived tasks: ${footerState.activedTasks}`}</p>
            <p>{`Finished tasks: ${footerState.finishedTasks}`}</p>
        </div>
    )
}
