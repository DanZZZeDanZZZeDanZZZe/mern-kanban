import React from 'react';
import './Navbar.css';
import UserPanel from '../UserPanel/UserPanel';

export const Navbar = () => {
    return (
        <nav className="Navbar">
            <span className="logo">Avesome Kanban Board</span>
            <UserPanel/>
        </nav>
    )
}
