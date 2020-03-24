import React from 'react';
import './App.scss';
import './additionalStyles.css';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { useRoutes } from './routes';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { TaskBarState } from './context/TaskBar/TaskBarState';
import DialogWindow from './components/DialogWindow/DialogWindow';
import DialogWindowState from './context/DialogWindow/DialogWindowState';

function App() {
  const isAuthenticated = true;
  const routes = useRoutes(isAuthenticated)
  return (
    <TaskBarState>
      <DialogWindowState>
      <DialogWindow/>
      <Router>
        <div className="App">
          {isAuthenticated && <Navbar/>}
            {routes}
          {isAuthenticated && <Footer/>}
        </div>
      </Router>
      </DialogWindowState>
    </TaskBarState>
  );
}

export default App;
