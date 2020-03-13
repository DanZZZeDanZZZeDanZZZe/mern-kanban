import React, {useReducer, useState, useEffect} from 'react'
import { taskBarContext } from './taskBarContext'
import { taskBarReducer } from './taskBarReducer'
import { SET_STATE } from '../types'

export const TaskBarState = ({children}) => {
    const titles = ['Backlog', 'Ready', 'In progress', 'Finished']
    const kanbanInfoJSON = localStorage.getItem('kanbanInfo')

    
    const initTasksState = kanbanInfoJSON 
        ? JSON.parse(kanbanInfoJSON).tasksState
        : titles.map( item => {
            return {         
                title: item,         
                issues: []   
            }
        })
    

    const [tasksState, dispatch] = useReducer(
        taskBarReducer, initTasksState
        
    )
    console.log(tasksState)

    const setTasksState = (newstate, type = 'setState') => {
        dispatch({
            type: SET_STATE,
            payload: newstate
        })
       // console.log('newstate', newstate)
    }

    /*const [tasksState, setTasksState] = useState( 
        kanbanInfoJSON ?
            JSON.parse(kanbanInfoJSON).tasksState
            :titles.map( item => {
                return {         
                    title: item,         
                    issues: []   
                }
            })
    )*/
    
    const [counter, setCounter] = useState(kanbanInfoJSON 
        ? JSON.parse(kanbanInfoJSON).counter
        : 0
    )
    
    useEffect(() => {
        const serialTasksState = JSON.stringify({tasksState, counter})
        localStorage.setItem('kanbanInfo', serialTasksState)
    }, [tasksState])

    return (
        <taskBarContext.Provider value = {{
            tasksState, 
            setTasksState,
            counter,
            setCounter
        }}>
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