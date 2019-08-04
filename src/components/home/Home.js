import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import axios from 'axios'
class Home extends Component {
 constructor(props) {
  super(props);
  this.state ={
   trips:[],
   message:''
  }
 }
 
 componentDidMount() {
   
  const token  = localStorage.getItem("token")
  axios
    .get("https://lambda-guidr.herokuapp.com/api/user/trips", {
      headers: { authorization: token }
    })
    .then(response => {
     
     this.setState({
       trips:response.data.trips
     })

    })
    .catch(err => {
      console.log(err.response.data.message)
    });

}


  
deleteTrip = (id) => {
console.log("fired")
const token  = localStorage.getItem("token")
axios
    .delete(`https://lambda-guidr.herokuapp.com/api/trip/${id}`, {
      headers: { authorization: token }
    })
    .then((response) => {
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

      this.setState({message:response.data.message})

    })
    .catch(err => {
      console.log(err.response.data.message)
    });
}
 render() {console.log(this.state.trips)
  return (
   <div className="home-container">

     <h2 className="home-trips-message">{this.state.message}</h2>
     <h2 className="trips-header">Trips</h2>

     <div className="trips-list">
      
     {this.state.trips
     ? this.state.trips.map((trip, index) =>
     
               <div className="trip" key={index}>
               <div style={detailContainer}> <p>Title: {trip.title}</p> <p> Description:<br /> {trip.shortDescription}</p></div>
              
               
               <div className="trips-options">
                 <Link to={`/update:${trip.id}`}><button className="btn-update-trip">Update</button></Link>
                 <i onClick={() => {this.deleteTrip(trip.id)}} className="fa fa-times fa-2x"> </i>
                 </div>
               </div>
              )
      : null}
      </div>
   </div>
  );
 }
}

export default Home;

const detailContainer = {
  width:"50%",
}