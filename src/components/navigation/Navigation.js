import React, { Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom'
import './navigation.css'

class Navigation extends Component {
 constructor(props) {
  super(props);
  this.state = {
   profilePic: this.props.userInfo.profilePic,
   shown:false,
   dropDown:'close',
   loggedIn:this.props.loggedIn
  }
 }

 componentWillUpdate(nextProps){
  if(this.state.profilePic !== nextProps.userInfo.profilePic)
  this.setState({
   profilePic:this.props.userInfo.profilePic
  })
  if (this.state.loggedIn !== nextProps.loggedIn)
  this.setState({
   loggedIn:this.props.loggedIn
  })
 }
 dropDown = () => {
  
  this.setState({
   shown: !this.state.shown
  })
  if (this.state.shown){
   this.setState({
    dropDown:"close",
    profilePic: this.props.userInfo.profilePic,

   }) 
  }
  else 
  this.setState({
   dropDown:"open"
  }) 
 }
 render() {console.log(this.props.userInfo)
  return (
   <div className="navigation">
    <div className="logo"></div>
   
    
     {this.state.loggedIn 
     ? <div className="links">
       <div >
       { this.state.profilePic 
       ? <img onClick={this.dropDown} className="profile-pic-nav" src={this.state.profilePic} alt="profile"/>
         
       : <i onClick={this.dropDown} className="fa fa-user fa-2x profile-pic-nav-none "> </i>}
        </div>
        <div className={`${this.state.dropDown}`}>
         <p style={styles}>{this.props.userInfo.username}</p>
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
const styles={
  color:'white',
  fontSize:"1.2rem",
  padding:"5px",
  textAlign:"center",
  borderBottom: "2px solid white",
  width:"90%",
  margin:"0 auto",
}