import React, { useContext } from 'react';
import './Navbar.css';
import { UserPanel, MenuItem } from '../UserPanel/UserPanel';
import { dialogWindowContext } from '../../context/DialogWindow/dialogWindowContext';

export const Navbar = () => {
    const {showAddDialog} = useContext(dialogWindowContext)

    return (
        <nav className="Navbar">
            <span className="logo">Avesome Kanban Board</span>
            <UserPanel>
                {
                    <MenuItem action={showAddDialog}>Add list</MenuItem>
                }
            </UserPanel>
        </nav>
    )
}
