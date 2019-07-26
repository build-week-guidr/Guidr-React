import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './navigation.css'

class Navigation extends Component {
 render() {
  return (
   <div className="navigation">
    <div className="logo"></div>
    <div className="links">
     <NavLink to="/home" activeClassName="selected">Home </NavLink>
     <NavLink to="/login" className="login-link" activeClassName="selected">Login</NavLink>
    </div>
   </div>
  );
 }
}

export default Navigation;