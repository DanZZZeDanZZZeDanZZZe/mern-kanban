import React, {useContext} from 'react';
import './TaskInfo.css';
import Context from '../../../context';

export const TaskInfo = () => {
    return (
        <div className="TaskInfo">
            <div>
                <h3>Title</h3>
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