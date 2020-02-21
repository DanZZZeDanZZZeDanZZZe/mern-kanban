import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { useRoutes } from './routes';

function App() {
  const isAuthenticated = true;
  const routes = useRoutes(isAuthenticated)
  return (
    <div className="App">
      {isAuthenticated && <Navbar/>}
        <routes/>
      {isAuthenticated && <Footer/>}
    </div>
  );
}

export default App;
