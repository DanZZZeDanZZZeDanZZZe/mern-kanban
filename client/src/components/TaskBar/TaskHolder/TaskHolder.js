import React from 'react';
import './TaskHolder.css';

export const TaskHolder = ({ title }) => {
    return (
        <div className="TaskHolder">
            <span>{title}</span>
            <div>
                <button>
                    <span>+</span> Add card
                </button>
            </div>
        </div>
    )
}