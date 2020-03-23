import React, {Component} from 'react'
import './UserPanel.css'
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



    render() {
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
                            menuButtonActivity && 
                            React.Children.map(this.props.children, (item)=>{
                                return <li>{item}</li>
                            })
                        }    
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default UserPanel
export {MenuItem}