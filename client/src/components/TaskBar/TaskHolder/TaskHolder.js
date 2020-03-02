import React, {useContext, useState} from 'react';
import './TaskHolder.css';
import Context from '../../../context';

export const TaskHolder = ({ title, issues, index }) => {
    const [intel, setIntel] = useState(false);
    const { addTask } = useContext(Context)
    function clickHolder() {
        setIntel(!intel);
    }
    function pressHandler(event) {
        if(event.keyCode === 13){
            event.preventDefault();
            setIntel(!intel);
            addTask(index, event.target.value)
        }
    }
    return (
        <div className="TaskHolder">
            <span>{title}</span>
            <div className="Task">
                <ul>
                    {
                        issues.map(item => {
                            return (
                                <li key={item.id}>{item.name}</li>
                            )
                        })
                    }
                </ul>
                {
                    index === 0 && intel ? 
                        <input type='text' autoFocus onKeyDown={pressHandler}/> : 
                        <button onClick={clickHolder}>
                            <span>+</span> Add card
                        </button>
                }
            </div>
        </div>
    )
}