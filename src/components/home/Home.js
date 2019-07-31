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
     this.setState({
       trips:response.data.trips
     })

    })
    .catch(err => {
      console.log(err.response.data.message)
    });

}
 render() {
  return (
   <div className="home-container">
     <h2>Trips</h2>
     <div className="trips-list">
     {this.state.trips
     ? this.state.trips.map((trip, index) =>
               <p className="trip" key={index}>{trip.title} {trip.shortDescription}-</p>
              )
      : null}
      </div>
   </div>
  );
 }
}

export default Home;