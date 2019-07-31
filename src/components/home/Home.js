import React, { Component } from 'react';
import axios from 'axios'
class Home extends Component {
 constructor() {
  super();
  this.state ={
   trips:[],
  }
 }
 
 componentDidMount() {
  const token  = localStorage.getItem("token")
  axios
    .get("https://lambda-guidr.herokuapp.com/api/user/trips", {
      headers: { authorization: token }
    })
    .then(response => {
     console.log(response)

    })
    .catch(err => {
      console.log(err.response.data.message)
    });

}
 render() {
  return (
   <div className="home-container">
    <h2>This is home. Lists Trips</h2>
   </div>
  );
 }
}

export default Home;