import React, {useReducer, useState, useEffect} from 'react'
import { taskBarContext } from './taskBarContext'
import { taskBarReducer } from './taskBarReducer'
import { SET_STATE, RAIS_THE_TASK, ADD_TASK } from '../types'

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

    const setTasksState = (newstate) => {
        dispatch({
            type: SET_STATE,
            payload: newstate
        })
    }
    
    const getIssues = (index) => {
        return tasksState[index].issues
    }

    function raisTheTask(taskIndex, tableIndex) {
        dispatch({
            type: RAIS_THE_TASK,
            payload: {
                taskIndex,
                tableIndex
            }
        })
    }

    function addTask(index, value) {
        if (index === 0) {
            setCounter(counter + 1);
            
            dispatch({
                type: ADD_TASK,
                payload: { 
                    value,
                    counter
                }
            })
        }
    }

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
            setCounter,
            raisTheTask,
            addTask,
            getIssues
        }}>    
            {children}
        </taskBarContext.Provider>
    )
}
