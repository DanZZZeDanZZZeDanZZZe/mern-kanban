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

function App() {
  const isAuthenticated = true;
  const routes = useRoutes(isAuthenticated)
  return (
    <TaskBarState>
      <Router>
        <div className="App">
          {isAuthenticated && <Navbar/>}
            {routes}
          {isAuthenticated && <Footer/>}
        </div>
      </Router>
    </TaskBarState>
  );
}

export default App;
