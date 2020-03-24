import React, {Component, useContext, useState} from 'react'
import './UserPanel.css'
import { dialogWindowContext } from '../../context/DialogWindow/dialogWindowContext'
const MenuItem = ({children, action}) => {
    return (
        <p onClick={action}>{children}</p>
    )
}

class UserPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuButtonActivity: false
        }
    }
    buttonClickHolder = () => {
        this.setState({
            menuButtonActivity: !this.state.menuButtonActivity
        })
    }

    /*dialogWindowVisible = () => {
        const {dialogWindowState: {visible}} = useContext(dialogWindowContext)
        return visible
    }*/

    render() {
        const { dialogVisible } = this.props
        const { menuButtonActivity } = this.state

        const buttonClasses = menuButtonActivity 
            ? `user-button`
            : `user-button active`

        return (
            <div className="UserPanel">
                <img src="user-avatar.svg" alt="avatar"></img>
                <div className="user-menu">
                    <button 
                        className={buttonClasses}
                        onClick={this.buttonClickHolder}
                    >
                        <img src="Vector.svg" alt="avatar"></img>
                    </button>
                    <ul>
                        {
                            menuButtonActivity && !dialogVisible &&
                            React.Children.map(this.props.children, (item)=>{
                                return <li onClick={this.buttonClickHolder}>{item}</li>
                            })
                        }    
                    </ul>
                </div>
                
            </div>
        )
    }
}

function WithData({children}) {
    const {dialogWindowState: {visible}} = useContext(dialogWindowContext)
    
    return (
        <UserPanel dialogVisible={visible}>{children}</UserPanel>
    )
}

export {WithData as UserPanel}
export {MenuItem}