import React from 'react';
import {Route} from 'react-router-dom'
import Landing from './components/home/Landing'
import Navigation from './components/navigation/Navigation'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Navigation />
        <Route path="/" exact component={Landing} />
      </div>
    </div>
  );
}

export default App;
