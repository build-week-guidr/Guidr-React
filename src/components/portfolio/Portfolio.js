import React, { Component } from 'react';
import axios from 'axios'



class Portfolio extends Component {
 constructor(props) {
  super(props);
  this.state = {
   tagline: '',
   age: '',
   years_exp: '',
   title: '',
   user: ''
  }
  
 }
 
 changeHandler = e => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
    });
  };
  
  portfolioUpdate = e => {
   e.preventDefault()
  const token = localStorage.getItem('token')
  const url = "https://lambda-guidr.herokuapp.com/api/auth/update"
  const { tagline, age, years_exp, title } = this.state
  const username = this.state.user
  axios.get("https://lambda-guidr.herokuapp.com/api/user",{ headers: {authorization:token}})
  .then((response) => {
   this.setState({
    user:response.data
   })
   console.log(this.state.user)
  })
  .catch((err) => {
   console.log(err)
  })
  
  axios.put(url,{ headers: {authorization: token}}, {tagline, age, years_exp, title, username})
   .then((response) => {
    localStorage.setItem('token' ,response.data.payload)
    console.log(response)
    this.props.history.push('/home')
   })
   .catch((err) => {
    console.log(err)
   })
 }
 render() {
  return (
   <div style={styles}>
   <form onSubmit={this.portfolioUpdate} className="details-form">
     <input
       className="input"
       type="text"
       value={this.state.title}
       onChange={this.changeHandler}
       placeholder="Title"
       name="title"
     />
     <br />
     <input
       className="input"
       type="number"
       value={this.state.age}
       onChange={this.changeHandler}
       placeholder="Age"
       name="age"
     />
     <br />
      <input
       className="input"
       type="number"
       value={this.state.years_exp}
       onChange={this.changeHandler}
       placeholder="Years Experience"
       name="years_exp"
     />
     <br />
      <input
       className="input"
       type="text"
       value={this.state.tagline}
       onChange={this.changeHandler}
       placeholder="Tagline"
       name="tagline"
     />
     <br />
     <button type="submit">Save</button>
     </form>
     </div>
  );
 }
}

export default Portfolio;
const styles = {
 backgroundColor: 'black',
 padding: '200px'
}