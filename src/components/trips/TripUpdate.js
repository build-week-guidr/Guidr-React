import React, { Component } from 'react';
import axios from 'axios';

class TripUpdate extends Component {
 constructor(props) {
  super(props);
  this.state = {
   shortDescription:'',
   duration:'',
   date:'',
   user_id:'',
   username:'',
   type:'',
   title:'',
   tripId:''
  }
 }
 componentDidMount(){
  this.setState({tripId: this.props.match.params.id.replace(':', '')})
  console.log()
  axios
    .get("https://lambda-guidr.herokuapp.com/api/user", {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(response => {
     
     this.setState({user_id:response.data.id})
    
    })
    .catch(err => {
      console.log(err)
    });
  
  }

 
 changeHandler = e => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  });
};
editTrip = e => {
 e.preventDefault()

 const {shortDescription, duration, date,user_id, title, type } =this.state
 axios.put(`https://lambda-guidr.herokuapp.com/api/trip/${this.state.tripId}`,
 {
  user_id,
  shortDescription,
  duration,
  date,
  title,
  type,
 },
 { headers: { authorization: localStorage.getItem("token")} })
 .then((response) => {
  console.log(response)
  this.props.history.push('/home')
 })
 .catch(err => {
  console.log(err.response);
});

}
 render() {
  return (
   <div className="edit-trip-container">
    <div className="edit-trip">
     <form onSubmit={this.editTrip} className="form-update">
     <input
              className="input"
              type="text"
              value={this.state.title}
              onChange={this.changeHandler}
              placeholder="Trip Name"
              name="title"
              required
            />
            <br />
           <input
             className="input"
             type="text"
             value={this.state.shortDescription}
             onChange={this.changeHandler}
             placeholder="Trip Description"
             name="shortDescription"
             required
           />
           <br />
           <input
             className="input"
             type="number"
             value={this.state.duration}
             onChange={this.changeHandler}
             placeholder="Duration"
             name="duration"
             required
           />
           <br />
           <input
             className="input"
             type="text"
             value={this.state.date}
             onChange={this.changeHandler}
             placeholder="Date"
             name="date"
             required
           />
           <br />
           <input
              className="input"
              type="number"
              value={this.state.type}
              onChange={this.changeHandler}
              placeholder="Type"
              name="type"
              required
            />
            <br />
           <button className="btn">Update Trip</button>
          </form>
    </div>
   </div>
  );
 }
}

export default TripUpdate;