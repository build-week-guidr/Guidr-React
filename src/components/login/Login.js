import React, { Component } from 'react';
import './login.css'
import axios from 'axios';

class Login extends Component {
 constructor() {
  super()
  this.state = {
   
   username:'',
   password: '',
  
  }
 
 }
 
 submitHandlerSignIn = e => {
  e.preventDefault()
  const {username, password} = this.state
  const url = "https://lambda-guidr.herokuapp.com/api/auth/login"
  axios.post(url,{username,password})
   .then((response) => {
    localStorage.setItem('token' ,response.data.token)
    console.log(response)
    this.props.history.push('/home')
   })
   .catch((err) => {
    console.log(err)
   })
 }
 submitHandlerRegister = e => {
  e.preventDefault()
  const {username, password} = this.state
  const url = "https://lambda-guidr.herokuapp.com/api/auth/register"
  axios.post(url,{username,password})
   .then((response) => {
    localStorage.setItem('token' ,response.data.token)
    console.log(response)
    this.props.history.push('/home')
   })
   .catch((err) => {
    console.log(err)
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
    <div className="login-form-container">
     <form className="login-form">
     <input
       className="input"
       type="text"
       value={this.state.username}
       onChange={this.changeHandler}
       placeholder="UserName"
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
     <button onClick={this.submitHandlerRegister}>Register</button>
     <button onClick={this.submitHandlerSignIn}>Sign In</button>
     </form>
    </div>
   </div>
  );
 }
}

export default Login;