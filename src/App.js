import React from 'react';
import {Route} from 'react-router-dom'
import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
