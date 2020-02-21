import React from 'react';
import './TaskBar.css';
import { TaskHolder } from './TaskHolder/TaskHolder';

export const TaskBar = () => {
    return (
        <main className="TaskBar">
            <div className="TaskContainer">
                <TaskHolder title="Backlog"/>
                <TaskHolder title="Ready"/>
                <TaskHolder title="In progress"/>
                <TaskHolder title="Finished"/>
            </div>
        </main>
    )
}