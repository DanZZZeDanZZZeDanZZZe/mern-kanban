import React, {useReducer, useState, useEffect} from 'react'
import { taskBarContext } from './taskBarContext'
import { taskBarReducer } from './taskBarReducer'
import { useHttp } from '../../hooks/http.hook'
import { SET_STATE, RAIS_THE_TASK, ADD_TASK, ADD_TASK_LIST, TASK_SETTING, CHECK_AVAILABILITY, DELETE_TASK_LIST, SEND_TASKS_STATE } from '../types'

export const TaskBarState = ({children}) => {
    const {request, error} = useHttp()

    const titles = ['Backlog', 'Ready', 'In progress', 'Finished']
    const kanbanInfoJSON = localStorage.getItem('kanbanInfo')

    const initTasksState = () => {
        return kanbanInfoJSON 
            ? JSON.parse(kanbanInfoJSON).tasksState
            : titles.map( (item, index) => {
                return {         
                    title: item,         
                    issues: [],
                    selectionMode: false,
                    accessibilityMode: (index === 0) ? true : false
                }
            })
    }   

    const [tasksState, dispatch] = useReducer(
        taskBarReducer, initTasksState()
    )

    const [counter, setCounter] = useState(kanbanInfoJSON 
        ? JSON.parse(kanbanInfoJSON).counter
        : 0
    )

    const setTasksState = (newstate) => {
        dispatch({
            type: SET_STATE,
            payload: newstate
        })
    }
    
    const enableSelectionMode = (index) => {
        dispatch({
            type: TASK_SETTING,
            payload: index
        })
    }

    const checkAvailability = () => {
        dispatch({
            type: CHECK_AVAILABILITY,
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

    const addTaskList = (data) => {
        if (data && data.title && data.title !== '') {
            const { title, position } = data
            dispatch({
                type: ADD_TASK_LIST,
                payload: { 
                    title,
                    position
                }
            })
            checkAvailability()
        }
    } 

    const deleteTaskList = (data) => {
        const { position } = data
        dispatch({
            type: DELETE_TASK_LIST,
            payload: { 
                position
            }
        })
        checkAvailability()
    }

    const sendTasksState = async () => {
        try {
            const fetched = await request('/api/data/send', 'POST', {tasksState, counter})
            console.log(fetched.message)
        } catch (e) {}
    }
    
    useEffect(() => {
        const serialTasksState = JSON.stringify({tasksState, counter})
        localStorage.setItem('kanbanInfo', serialTasksState)
        console.log(tasksState)
    }, [tasksState])

    useEffect(() => {
        sendTasksState()
    }, [tasksState])

    return (
        <taskBarContext.Provider value = {{
            tasksState, 
            setTasksState,
            counter,
            setCounter,
            raisTheTask,
            addTask,
            getIssues,
            addTaskList,
            deleteTaskList,
            enableSelectionMode,
            checkAvailability
        }}>    
            {children}
        </taskBarContext.Provider>
    )
}
