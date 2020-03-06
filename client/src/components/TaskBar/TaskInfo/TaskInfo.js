import React, {useContext} from 'react';
import './TaskInfo.css';
import Context from '../../../context';


export const TaskInfo = () => {
    const { setTaskId, taskId, tasksState} = useContext(Context);
    function findTitle(id, state) {
        let text = ''
        state.forEach(element => {
            element.issues.forEach(el => {
                console.log('el', el)
                if (el.id === id ) text = el.name
            })
        });
        return text
    }
    return (
        <div className="TaskInfo">
            <div>
                <h3>{findTitle(taskId, tasksState)}</h3>
                <button 
                    onClick = {() => {
                        setTaskId(null)
                    }}
                >
                    <img src="exit.svg" alt="exit"/>
                </button>
            </div>
            <div>
                <p>Descr</p>
            </div>
            <div>
                <p>Date</p>      
            </div>
        </div>
    )
}