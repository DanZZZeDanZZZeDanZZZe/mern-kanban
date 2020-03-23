import React from 'react';
import './Navbar.css';
import UserPanel, { MenuItem } from '../UserPanel/UserPanel';

export const Navbar = () => {
    return (
        <nav className="Navbar">
            <span className="logo">Avesome Kanban Board</span>
            <UserPanel>
                {
                    <MenuItem action={()=>{console.log('test')}}>Add list</MenuItem>

                }
            </UserPanel>
        </nav>
    )
}
