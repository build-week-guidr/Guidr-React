import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Landing from './components/home/Landing'
import Login from './components/login/Login'
import Home from './components/home/Home'
import PrivateRoute from './components/home/PrivateRoute'
import Navigation from './components/navigation/Navigation'
import Trips from './components/trips/Trips'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Portfolio from './components/portfolio/Portfolio';

class App extends Component {
  constructor() {
   super();
   this.state = {
    loggedIn:false,
    userInfo:{},
   }
  }
  componentDidMount(){
    if (localStorage.getItem("token")){
      this.setState({
        loggedIn:true,
      })
    }
    axios
    .get("https://lambda-guidr.herokuapp.com/api/user", {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(response => {
     
     this.setState({userInfo:response.data})
    })
    .catch(err => {
      console.log(err)
    });
  
  }
   
  
  isLoggedIn = (val) => {
    this.setState({
      loggedIn:val
    })
  }
  getUserInfo = (info) => {
    this.setState({
      userInfo:info
    })
  }
  render() {
  return (
    <div className="App">
      <div className="app-container">
        <Navigation loggedIn={this.state.loggedIn} userInfo={this.state.userInfo}/>
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/portfolio" isLoggedIn={this.isLoggedIn} component={Portfolio} />
        <PrivateRoute exact path="/trips" isLoggedIn={this.isLoggedIn} component={Trips} />
        <Route exact path="/login" render={ (props) => <Login {...props} isLoggedIn={this.isLoggedIn} getUserInfo={this.getUserInfo}/>} />
        
        

      </div>
    </div>
  );
}
}

export default App;
