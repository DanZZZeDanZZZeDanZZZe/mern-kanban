import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  const isAuthenticated = true;
  return (
    <div className="App">
      {isAuthenticated && <Navbar/>}
      <main>

      </main>
      {isAuthenticated && <Footer/>}
    </div>
  );
}

export default App;
