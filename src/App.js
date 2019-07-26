import React from 'react';
import {Route} from 'react-router-dom'
import Landing from './components/home/Landing'
import Login from './components/login/Login'
import Home from './components/home/Home'
import PrivateRoute from './components/home/PrivateRoute'
import Navigation from './components/navigation/Navigation'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Navigation />
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </div>
  );
}

export default App;
