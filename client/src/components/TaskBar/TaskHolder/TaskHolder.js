import React from 'react';
import './TaskHolder.css';

export const TaskHolder = props => {
    return (
        <div className="TaskHolder">
            <p>{props.title}</p>
        </div>
    )
}