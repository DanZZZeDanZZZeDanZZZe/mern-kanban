import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import { TaskBar } from './components/TaskBar/TaskBar';
import { Authorization } from './components/Authorization/Authorization';

export const useRoutes = isAutenticated => {
    if (isAutenticated) {
        return (
            <Switch>
                <Route patch='/tasks' exact>
                    <TaskBar/>
                </Route>
            </Switch>
        )
    }  
    
    return (
        <Switch>
            <Route patch='/' exact>
                {console.log("Authorization")}
                <Authorization />
            </Route>
        </Switch>
    )
}