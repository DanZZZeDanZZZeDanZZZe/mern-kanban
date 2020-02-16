import React from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="Navbar">
            <span className="logo">Kanban</span>
            <div className="user-panel">
                <img src="user-avatar.svg" alt="avatar"></img>
            </div>
        </nav>
    )
}
