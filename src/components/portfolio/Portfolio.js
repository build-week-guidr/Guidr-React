import React, { Component } from "react";
import './portfolio.css'
import axios from "axios";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagline: "",
      age: "",
      yearsAsGuide: "",
      title: "",
      username: "",
      profilePic: "",
      coverPic: "",
      name: "",
      token: localStorage.getItem("token"),
      profilePicUrl:"",
      profileInfo:{}
    };
  }
  componentDidMount() {
    const { token } = this.state;
    axios
      .get("https://lambda-guidr.herokuapp.com/api/user", {
        headers: { authorization: token }
      })
      .then(response => {
        this.setState({
          profileInfo:response.data,
          username:response.data.username,
          profilePic:response.data.profilePic
        })
        
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
  submitPortfolio = e => {
    e.preventDefault();  
    console.log(this.state.username)
    const url = "https://lambda-guidr.herokuapp.com/api/auth/update";
    const {
      token,
      tagline,
      age,
      yearsAsGuide,
      title,
      username,
      coverPic,
      profilePicUrl,
      name
    } = this.state;
    const profilePic = profilePicUrl
    axios
      .put(
        url,
        {
          username,
          tagline,
          age,
          yearsAsGuide,
          title,
          name,
          coverPic,
          profilePic
        },
        { headers: { authorization: token } }
      )
      .then(response => {
        localStorage.setItem("token", response.data.token);  
        this.props.updateUserInfo()
        console.log(this.props.userInfo.profilePic)
        this.setState({profilePic:this.props.userInfo.profilePic})
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="portfolio-page">
       <div className="portfolio-profile">
         <p>User Name: {this.props.userInfo.title}</p>
         <p>Age: {this.props.userInfo.age}</p>
         <p>Years of Experience: {this.props.userInfo.yearsAsGuide}</p>
         <p>Personal Tagline: {this.props.userInfo.tagline}</p>
       </div>
        <div className="form-container">
         
          <form onSubmit={this.submitPortfolio} className="form">
            
          <div >
            { this.state.profilePic
            ? <img className="profile-pic" src={this.props.userInfo.profilePic} alt="profile"/>
            : <i className="fa fa-user fa-5x profile-pic-none"> </i>}
          </div>
          <h2>User Profile</h2>
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
              value={this.state.yearsAsGuide}
              onChange={this.changeHandler}
              placeholder="Years Experience"
              name="yearsAsGuide"
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
            <input
              className="input"
              type="text"
              value={this.state.profilePicUrl}
              onChange={this.changeHandler}
              placeholder="Profile Pic"
              name="profilePicUrl"
            />
            <br />
            <input
              className="input"
              type="text"
              value={this.state.coverPic}
              onChange={this.changeHandler}
              placeholder="Cover Picture"
              name="coverPic"
            />
  
            <br />
            <button className="btn" type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Portfolio;

