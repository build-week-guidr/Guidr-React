import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './navigation.css'

class Navigation extends Component {
 render() {
  return (
   <div className="navigation">
    <NavLink to="/" activeClassName="selected">Home </NavLink>
    <NavLink to="/login" className="login-link" activeClassName="selected">Login</NavLink>
   </div>
  );
 }
}

export default Navigation;