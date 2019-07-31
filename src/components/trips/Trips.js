import React, { Component } from 'react';
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
  }
 }
 submitTrip = e => {
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
   <div className="trips-page">
     <form onSubmit={this.submitTrip} className="form">
          
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
            <br />
            <button>Submit Trip</button>
            </form>
   </div>
  );
 }
}

export default Trips;