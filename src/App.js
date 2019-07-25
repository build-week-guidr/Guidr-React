import React from 'react';
import {Route} from 'react-router-dom'
import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Navigation />
        <Route path="/" exact component={Home} />
      </div>
    </div>
  );
}

export default App;
