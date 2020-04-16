import React, {useContext} from 'react';
import './TaskHolder.css';
import { taskBarContext } from '../../../context/TaskBar/taskBarContext';

export const TaskHolder = ({ item, index, setTaskId, lastPanel }) => {
    const {title, issues, selectionMode, accessibilityMode} = item
    const {raisTheTask, addTask, getIssues, enableSelectionMode, checkAvailability} = useContext(taskBarContext)
    

    let previousList = null
    if (index > 0) {
        previousList = createPreviousList(index-1);
    }
    function createPreviousList(index) {
        const taskList = getIssues(index).map((it, ind) => {
            return (
                <li 
                    key={it.id} 
                    className="previousItem" 
                    onClick={() => {
                        raisTheTask(ind, index)
                        enableSelectionMode(null)
                        checkAvailability()
                    }}
                >
                    {it.name}
                </li>
            )
        })
        return taskList
    }
    
    function pressHandler(event) {
        if(event.keyCode === 13){
            event.preventDefault();
            enableSelectionMode(null)
            checkAvailability()
            addTask(index, event.target.value)
        }
    }

    return (
        <div className="TaskHolder">
            <span>{title}</span>
            <div className="scrollbarHolder">
                <div className="Task">
                    <ul>
                        {
                            issues.map(item => {
                                return (
                                    <li 
                                        key={item.id}
                                        onClick={()=> {
                                            setTaskId(item.id)
                                        }}
                                    >
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                        !previousList && 
                        selectionMode && 
                        <input type='text' autoFocus onKeyDown={pressHandler}/> 
                    }
                    {
                       selectionMode && <ul>{previousList}</ul>
                    }
                    {
                        !selectionMode &&
                        !lastPanel &&
                        <button 
                            onClick={()=>{enableSelectionMode(index)}} 
                            disabled={!accessibilityMode}
                        >
                            <span>+</span> Add card
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}