import React, { useContext } from 'react';
import './Navbar.css';
import { UserPanel, MenuItem } from '../UserPanel/UserPanel';
import { dialogWindowContext } from '../../context/DialogWindow/dialogWindowContext';

export const Navbar = () => {
    const {showAddDialog, showDeleteDialog} = useContext(dialogWindowContext)
    const menuItems = [
        <MenuItem key="AddList" action={showAddDialog}>Add list</MenuItem>,
        <MenuItem key="DeleteList" action={showDeleteDialog}>Delete list</MenuItem>
    ]
    return (
        <nav className="Navbar">
            <span className="logo">Avesome Kanban Board</span>
            <UserPanel>
                {
                    menuItems
                }
            </UserPanel>
        </nav>
    )
}
