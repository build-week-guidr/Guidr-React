import React, { Component } from 'react';
import './login.css'

class Login extends Component {
 constructor() {
  super()
  this.state = {
   
   username:'',
   password: '',
  
  }
  
 }
 submitHandler = e => {
  e.preventDefault()

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
     <form onSubmit={this.submitHandler} className="login-form">
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
       name="Password"
     />
     <br />
     <button>Register</button>
     <button>Sign In</button>
     </form>
    </div>
   </div>
  );
 }
}

export default Login;