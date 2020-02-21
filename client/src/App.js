import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { TaskBar } from './components/TaskBar/TaskBar';

function App() {
  const isAuthenticated = true;
  return (
    <div className="App">
      {isAuthenticated && <Navbar/>}
      <TaskBar/>
      {isAuthenticated && <Footer/>}
    </div>
  );
}

export default App;
