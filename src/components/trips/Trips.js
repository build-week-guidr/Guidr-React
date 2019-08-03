import React, { Component } from 'react';
import axios from 'axios'
import './trips.css'
class Trips extends Component {
 constructor() {
  super();
  this.state = {
   title: '',
   shortDescription:'',
   isProfessional:false,
   type:'',
   duration:'',
   date:'',
   id:'',
   username:'',
   tripTypes:[],
   token: localStorage.getItem("token"),
   message:'',
   checkingCreds:false,
   
  }
 }
 
 componentDidMount(){
 axios.get("https://lambda-guidr.herokuapp.com/api/trip/list/types")
 .then(response => {
  this.setState({
   tripTypes:response.data
  })
 
 })
 .catch(err => {
  console.log(err)
});
 const {token} = this.state
  axios
  .get("https://lambda-guidr.herokuapp.com/api/user", {
    headers: { authorization: token }
  })
  .then(response => {
    const {username, id}  = response.data   
    this.setState({
      username:username,
      user_id:id,
    })

  })
  .catch(err => {
    console.log(err.response.data.message)
  });

}
submitTrip = e => {
  e.preventDefault()
  this.setState({checkingCreds:true})
  const url = "https://lambda-guidr.herokuapp.com/api/trip"
  const { title, shortDescription, isProfessional, type, duration, date, token,user_id } = this.state
  axios
  .post(
    url,
    {
     user_id,
     title,
     shortDescription,
     isProfessional,
     type,
     duration,
     date,
     
    },
    { headers: { authorization: token } }
  )
  .then(response => {
    console.log(response)
   this.setState({message: "Success"})
   this.setState({checkingCreds:false})
  })
  .catch(err => {
    this.setState({checkingCreds:false})
     
  });
 
 }
 changeHandler = e => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  });
};
 render() {
  return (
   <div className="trips-page">
     <div className="trips-form-container">
         <form onSubmit={this.submitTrip} className="form">
         {this.state.checkingCreds && <div className="spinner"></div>}
         {this.state.message && <p className="error-message">{this.state.message}</p>}

            <input
              className="input"
              type="text"
              value={this.state.title}
              onChange={this.changeHandler}
              placeholder="Trip Name"
              name="title"
            />
            <br />
            <input
              className="input"
              type="text"
              value={this.state.shortDescription}
              onChange={this.changeHandler}
              placeholder="Trip Description"
              name="shortDescription"
            />
            <br />
            <input
              className="input"
              type="number"
              value={this.state.type}
              onChange={this.changeHandler}
              placeholder="Type"
              name="type"
            />
            <br />
            <input
              className="input"
              type="number"
              value={this.state.duration}
              onChange={this.changeHandler}
              placeholder="Duration"
              name="duration"
            />
            <br />
            <input
              className="input"
              type="text"
              value={this.state.date}
              onChange={this.changeHandler}
              placeholder="Date"
              name="date"
            />
            <br />
            <input
              className="input"
              type="checkbox"
              value={this.state.private}
              onChange={this.changeHandler}
              placeholder="private"
              name="private"
            />
            <p className="checkbox">Private/Profesional<br />unchecked Private</p>
            <br />
            <button className="btn">Submit Trip</button>
            <div className="types">
             <p className="type-head">Trip Types</p>
              {this.state.tripTypes.map((type, index) =>
               <p key={index}>{type.id}-{type.type}</p>
              )}
             </div>
            </form>
            </div>
   </div>
  );
 }
}

export default Trips;