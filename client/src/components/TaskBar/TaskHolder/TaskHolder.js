import React, {useContext} from 'react';
import './TaskHolder.css';
import Context from '../../../context';

export const TaskHolder = ({ title, issues }) => {
    const {  } = useContext(Context)
    return (
        <div className="TaskHolder">
            <span>{title}</span>
            <div>
                <ul>
                    {
                        issues.map(item => {
                            return (
                                <li>{item.name}</li>
                            )
                        })
                    }
                </ul>
                <button>
                    <span>+</span> Add card
                </button>
            </div>
        </div>
    )
}