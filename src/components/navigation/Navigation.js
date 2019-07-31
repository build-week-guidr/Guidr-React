import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './navigation.css'

class Navigation extends Component {
 render() {
  return (
   <div className="navigation">
    <div className="logo"></div>
    <div className="links">
    
     {localStorage.getItem("token")
     ? <div>
      <NavLink to="/home" activeClassName="selected">Home </NavLink>
      <NavLink to="/portfolio" activeClassName="selected">Portfolio </NavLink>
      <NavLink to="/trips" activeClassName="selected">Trips </NavLink>

      </div>
     : <NavLink to="/login" className="login-link" activeClassName="selected">Login</NavLink> 
    
     
     }
    </div>
   </div>
  );
 }
}

export default Navigation;