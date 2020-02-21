import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { useRoutes } from './routes';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const isAuthenticated = !true;
  const routes = useRoutes(isAuthenticated)
  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navbar/>}
          {routes}
        {isAuthenticated && <Footer/>}
      </div>
    </Router>
  );
}

export default App;
