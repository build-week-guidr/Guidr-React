import React, { Component } from 'react';
import './login.css'
import axios from 'axios';

class Login extends Component {
 constructor() {
  super()
  this.state = {
   checkingCreds:false,
   username:'',
   password: '',
   errorMessage: null
  }
 
 }
 
 submitHandlerSignIn = e => {
  e.preventDefault()
  this.setState({checkingCreds:true})
  const {username, password} = this.state
  const url = "https://lambda-guidr.herokuapp.com/api/auth/login"
  axios.post(url,{username,password})
   .then((response) => {
    localStorage.setItem('token' ,response.data.token)
    this.setState({
      errorMessage:null,
      checkingCreds:false
    })
    this.props.history.push('/home')
   })
   .catch((err) => {
   
    this.setState({
      errorMessage:err,
      checkingCreds:false
    })
     console.log(this.state.errorMessage)
   })
 }
 submitHandlerRegister = e => {
  e.preventDefault()
  this.setState({checkingCreds:true})
  const {username, password} = this.state
  const url = "https://lambda-guidr.herokuapp.com/api/auth/register"
  axios.post(url,{username,password})
   .then((response) => {
    localStorage.setItem('token' ,response.data.token)
    this.setState({
      errorMessage:null,
      checkingCreds:false
    })
    this.props.history.push('/home')
   })
   .catch((err) => {
   
    this.setState({
      errorMessage:err
    })
     console.log(this.state.errorMessage)
   })
 }
 changeHandler = e => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  });
};
 render() {
  return (
   <div className="login-page">
    <div className="form-container">
   
     <form className="form"> 
     {this.state.checkingCreds && <div className="spinner"></div>}
     {this.state.errorMessage && <p className="error-message">{this.state.errorMessage.response.data.message}</p>}
     <input
       className="input"
       type="text"
       value={this.state.username}
       onChange={this.changeHandler}
       placeholder="Username"
       name="username"
     />
     <br />
     <input
       className="input"
       type="text"
       value={this.state.password}
       onChange={this.changeHandler}
       placeholder="Password"
       name="password"
     />
     <br />
     <div>
       <button className="btn" onClick={this.submitHandlerRegister}>Register</button>
       <button className="btn" onClick={this.submitHandlerSignIn}>Sign In</button>
     </div>
     </form>
    </div>
   </div>
  );
 }
}

export default Login;