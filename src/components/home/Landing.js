import React, { Component } from 'react';
import './home.css'
import logo from '../../assets/imgs/logoG.webp'

class Landing extends Component {
 render() {
  return (
   <div className="landing-container">
    <div className="landing-page">
     <div className="cta">
      <div>
       <img className="landing-logo" src={logo} alt="guidr logo"></img>
       </div>
      <p>As a professional guide, you know your way around the backcountry,
        but sharing that experience might not be an easily traveled path. 
        Guidr will let you upload, log, and share all your outdoor journeys.
      </p>
     </div>
    </div>
   </div>
  );
 }
}

export default Landing;
