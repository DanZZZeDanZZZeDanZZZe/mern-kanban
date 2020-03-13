import React, {useContext} from 'react';
import './TaskHolder.css';
import Context from '../../../context';
import { taskBarContext } from '../../../context/TaskBar/taskBarContext';

export const TaskHolder = ({ title, index, activity }) => {
    const { addTask, changeActivity, getIssues, setTaskId} = useContext(Context)
    const taskBar = useContext(taskBarContext)
    const raisTheTask = taskBar.raisTheTask
    let previousList = false
    if (index > 0) {
        previousList = createPreviousList(index-1);
    }

    function createPreviousList(index) {
        const issues = getIssues(index).map((it, ind) => {
            return (
                <li 
                    key={it.id} 
                    className="previousItem" 
                    onClick={() => {
                        raisTheTask(ind, index)
                        changeActivity(index + 1)
                    }}
                >
                    {it.name}
                </li>
            )
        })
        return issues
    }
    
    function clickHolder() {
        changeActivity(index)
    }
    function pressHandler(event) {
        if(event.keyCode === 13){
            event.preventDefault();
            changeActivity(index)
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
                            getIssues(index).map(item => {
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
                        !previousList && activity.field && <input type='text' autoFocus onKeyDown={pressHandler}/> 
                    }
                    {
                        previousList && activity.field && <ul>{previousList}</ul>
                    }
                    {
                        !activity.field && 
                            <button 
                                onClick={clickHolder} 
                                disabled={!activity.button}
                            >
                                <span>+</span> Add card
                            </button>
                    }
                </div>
            </div>
        </div>
    )
}