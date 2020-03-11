import React, {useReducer, useState} from 'react'
import { taskBarContext } from './taskBarContext'
import { taskBarReducer } from './taskBarReducer'

export const TaskBarState = ({children}) => {
   /* const [state, dispatch] = useReducer(taskBarReducer, {visible: false})*/
    const titles = ['Backlog', 'Ready', 'In progress', 'Finished']
    const kanbanInfoJSON = localStorage.getItem('kanbanInfo')

    const [tasksState, setTasksState] = useState( 
        kanbanInfoJSON 
            ? JSON.parse(kanbanInfoJSON).tasksState
            : titles.map( item => {
                return {         
                    title: item,         
                    issues: []   
                }
            })
    )
    
    return (
        <taskBarContext.Provider value = {
            tasksState, 
            setTasksState,
            kanbanInfoJSON 
        }>
            {children}
        </taskBarContext.Provider>
    )
}


/*export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, {visible: false})

    const show = (text, type = 'warning') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {text, type}
        })
    }
    const hide = () => dispatch({type: HIDE_ALERT})

    return (
        <AlertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}*/