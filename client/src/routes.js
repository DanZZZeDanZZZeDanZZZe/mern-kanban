import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import { TaskBar } from './components/TaskBar/TaskBar';


export const useRoutes = isAutenticated => {
    if (isAutenticated) {
        return (
            <Switch>
                <Route patch='/' exact>
                    <TaskBar/>
                </Route>
            </Switch>
        )
    }  
    
    return (
        <Switch>
            <Route>
                
            </Route>
        </Switch>
    )
}