import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './navigation.css'

class Navigation extends Component {
 constructor(props) {
  super(props);
  this.state = {
   profilePic: this.props.userInfo.profilePic,
   shown:false,
   dropDown:'close'
  }
 }
 dropDown = () => {
  
  this.setState({
   shown: !this.state.shown
  })
  if (this.state.shown){
   this.setState({
    dropDown:"close"
   }) 
  }
  else 
  this.setState({
   dropDown:"open"
  }) 
 }
 render() {
 
  return (
   <div className="navigation">
    <div className="logo"></div>
   
    
     {this.props.loggedIn 
     ? <div className="links">
       <div >
       { this.state.profilePic
       ? <img onClick={this.dropDown} className="profile-pic-nav" src={this.state.profilePic} alt="profile"/>
       : <i onClick={this.dropDown} className="fa fa-user fa-2x profile-pic-nav-none "> </i>}
        </div>
        <div className={`${this.state.dropDown}`}>
         
         <NavLink to="/home" activeClassName="selected">Home </NavLink>
         <NavLink to="/portfolio" activeClassName="selected">Portfolio </NavLink>
         <NavLink to="/trips" activeClassName="selected">Trips </NavLink>
        </div>
      </div>

     : <NavLink to="/login" className="login-link" activeClassName="selected">Login</NavLink> 
    
     
     }
    
   </div>
  );
 }
}

export default Navigation;