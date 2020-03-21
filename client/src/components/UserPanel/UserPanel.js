import React, {Component} from 'react'
import './UserPanel.css'

class UserPanel extends Component {
    render() {
        return (
            <div className="UserPanel">
                <img src="user-avatar.svg" alt="avatar"></img>
                <div className="user-menu">
                    <button className="user-button">
                        <img src="Vector.svg" alt="avatar"></img>
                    </button>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default UserPanel